var express = require('express');
var router = express.Router();
const { check } = require('express-validator');

const { signout, signup, signin } = require('../controllers/auth');

router.post(
  '/signup',
  [
    check('name', 'name is should be 3 char').isLength({ min: 5 }),
    check('email', 'email is required').isEmail(),
    check('password', 'password  should be 3 char').isLength({ min: 5 }),
  ],
  signup,
);
router.get('/signout', signout);

router.post(
  '/signin',
  [
    check('email', 'email is required').isEmail(),
    check('password', 'password  should be required').isLength({ min: 1 }),
  ],
  signin,
);

router.get('/signin', signin);

module.exports = router;
