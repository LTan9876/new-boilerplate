const router = require('express').Router();
// const express = require('express');
// const app = express();


router.use('/puppies', require('./puppies')); // matches all requests to  /api/puppies/



router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});



module.exports = router;
