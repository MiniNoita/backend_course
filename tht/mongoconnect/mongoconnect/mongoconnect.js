// Yhteydenotto mongodb-kantaan mongoose-kirjaston avulla

const mongoose = require('mongoose');

function mongoconnect() {
  mongoose
    .connect('mongodb://jokutunnus:jokusalasana@127.0.0.1:27017/koetietokanta')
    .then(() => {
      console.log('Yhteys MongoDB-kantaan toimii!');
    })
    .catch((err) => {
      console.error('MongoDB yhteysvirhe ' + err);
    });
}

mongoconnect();
