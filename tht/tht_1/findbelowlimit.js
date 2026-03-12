const Dbmethods = require('./dbmethods');

const limit = 110;

Dbmethods.findBelowLimit(limit, (err, rows) => {
  if (err) throw err;

  console.log('Data received from Db:');
  console.log(rows);
});
