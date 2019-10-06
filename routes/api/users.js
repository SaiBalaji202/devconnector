const express = require ('express');
const router = express.Router ();
const {check, validationResult} = require ('express-validator');

// @route    POST api/users
// @desc     Register User
// @access   public
router.post (
  '/',
  [
    check ('name', 'Name is Required').trim ().not ().isEmpty (),
    check ('email', 'Email is Required').trim ().isEmail (),
    check ('password', 'Password should be minimum 6 char long')
      .trim ()
      .isLength ({
        min: 6,
      }),
  ],
  (req, res) => {
    const errors = validationResult (req);
    if (!errors.isEmpty ()) {
      res.status (400).json ({errors: errors.array ()});
    }
    console.log (req.body);
    res.send ('User Route');
  }
);
module.exports = router;
