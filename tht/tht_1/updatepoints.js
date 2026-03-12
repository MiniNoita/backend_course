const Dbmethods = require('./dbmethods');

const addPoints = true;

Dbmethods.updatePoints(addPoints, 5, 'a1234', (err, result) => {
  if (err) throw err;

  if (addPoints) {
    console.log(result.affectedRows + ' rows affected, points have been added');
  } else {
    console.log(
      result.affectedRows + ' rows affected, points have been reduced',
    );
  }
});
