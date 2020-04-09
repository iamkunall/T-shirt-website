var express = require('express');
var router = express.Router();
const { check } = require('express-validator');

const { signout, signup, signin, isSignedIn } = require('../controllers/auth');

router.post(
  '/signup',
  [
    check('name', 'name should be 3 char').isLength({ min: 5 }),
    check('email', 'email is required').isEmail(),
    check('password', 'password  should be 3 char').isLength({ min: 5 }),
  ],
  signup,
);


router.post(
  '/signin',
  [
    check('email', 'email is required').isEmail(),
    check('password', 'password  should be required').isLength({ min: 1 }),
  ],
  signin,
);

router.get('/signout', signout);
router.get('/testroute', isSignedIn, (req, res) => {
  res.json(req.auth)
});


module.exports = router;
