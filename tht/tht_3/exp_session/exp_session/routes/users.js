/* eslint-disable new-cap */
/*
http://localhost:3000/users/ ei ole tässä sovelluksessa käytössä
*/

import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

export default router;
