const Dbmethods = require('./dbmethods');

Dbmethods.findAll((err, rows) => {
  if (err) throw err;

  console.log('Data received from Db:');
  console.log(rows);
});
