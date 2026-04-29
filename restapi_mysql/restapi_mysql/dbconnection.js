// Yhteydenotto MySQL-kantaan
// Käytetään Noden mysql2-kirjastoa ja sen promise-wrapperia
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config(); //dotenv -moduuli tarvitaan jos aiotaan käyttää .env -filua

// Yhteys sijoitetaan muuttujaan conn
const conn = await mysql.createConnection({
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'studentdb',
  host: process.env.DB_HOST || 'localhost',
});

try {
  await conn.connect();
  console.log('Yhteys MySQL-kantaan toimii!');
} catch (err) {
  console.error('MySQL yhteysvirhe: ' + err.message);
}
export default conn;
