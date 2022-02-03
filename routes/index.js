var express = require('express');
var router = express.Router();
const User = require('../models/User');

// Finding a user
router.get('/check-user/:username', (req, res) => {
  User.findOne({ username: req.params.username })
  .then(results => {
    res.render('userpage', { username: results.username, cohort: results.cohort })
  })
  .catch(err => console.error(err))
})

// Create a user
router.post('/create-user', (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
    likesCoding: req.body.likesCoding,
    cohort: req.body.cohort,
  })
  .then(results => {
    res.render('userpage', { username: results.username, cohort: results.cohort })
  })
  .catch(err => console.error(err))
})

router.get('/', (req, res) => {
  User.find()
  .then(results => {
    res.render('all-users', { users: results })
  })
})


module.exports = router;
