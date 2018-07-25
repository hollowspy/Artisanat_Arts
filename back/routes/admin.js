var express = require('express');
var router = express.Router();
const passport = require('passport');
const connection = require('../bdd/bdd.js')

router.post('/', (req, res) => {
  passport.authenticate('local', (err, user) => {
    console.log('route admin', user)
    if (err) return res.status(500).send(`${err} dans auth/signin`);
    if (!user) return res.status(400).json({ flash: 'Not a yet a Success' });
    return res.json({ user, flash: 'ok' });
  })(req, res);
});

module.exports = router;

