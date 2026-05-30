/* Mahdollisiman yksinkertinen chatti Socket.io:lla toteutettuna.
 * Socket.io:n toiminta perustuu eventteihin. Socket-luokka
 * perii Noden events.eventEmitter-luokan, joten socket-olio
 * voi emitoida eventtejä.
 *
 * Tässä tiedostossa on serveri, joka käynnistyy komennolla node server.
 * Clientit ovat osoitteissa http://localhost:3010/client.html
 */

const http = require('http');
const fs = require('fs');
const Moniker = require('moniker');

//http-serveri joka laitetaan muuttujaan app, servaa sivun client.html
const app = http
  .createServer((req, res) => {
    fs.readFile('client.html', 'utf-8', (error, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  })
  .listen(3010);
console.log('Http server in port 3010');

//Socket-serveri io luodaan ja liitetään http-serveriin app
const io = require('socket.io')(app);

/*
Serverin io.sockets.on-metodi käsittelee 'connection'-tapahtumia, eli
tapahtumia, joissa serverin (io) clientit (sockets) ottavat yheyksiä (on) serveriin.
'connection'-tapahtuma suoritetaan aina, kun clientin socket ottaa yhteyden 
serveriin. Callbackin parametrina oleva muuttuja socket viittaa clientin socketiin.
*/

/*
My code
*/

let users = [];

function addUser() {
  const user = {
    name: Moniker.choose(),
    last_entry: 0,
  };

  users.push(user);
  return user;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

const winningNumber = getRandomInt(1, 100);

/*
My code end
*/

io.sockets.on('connection', (socket) => {
  /* Kun clientilta (socket) tulee 'message to server'-tapahtuma, saadaan clientilta data.
       data-muuttuja on olio joka sisältää avain-arvo -pareja.
		*/
  //   socket.on('message_to_server', (data) => {
  //     /* Lähetetään (eli emitoidaan eventtinä) clientilta tullut data takaisin kaikille clientin socketeille. Emitoitavan tapahtuman nimi on 'message_to_client'.
  //      */
  //     io.sockets.emit('message_to_client', { message: data.message });
  //   });

  /* 
  --------------------
   Here starts my code
  ---------------------
  */

  const user = addUser(); //give the player their username
  socket.emit('welcome', user);
  // socket.on('disconnet', () => {
  //   removeUser(user);
  // });

  socket.on('message_to_server', (data) => {
    const usersQuess = data.message;
    let message = '';

    message = usersQuess < winningNumber ? 'too small' : 'too big';

    if (usersQuess == winningNumber) {
      message = `that's right! ${user.name} Won!`;
    }

    io.sockets.emit('message_to_client', {
      message: message,
      number: usersQuess,
      user: user.name,
    });
  });
});
