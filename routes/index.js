var express = require('express');
var router = express.Router();
const User = require('../models/User');

// Finding a user
router.get('/check-user/:id', (req, res) => {
  User.findById(req.params.id)
  .then(results => {
    res.render('userpage', { username: results.username, cohort: results.cohort, _id: results._id })
  })
  .catch(err => console.error(err))
})

// Create a user
router.post('/create-user', (req, res) => {
  console.log(req.body);
  User.create({
    username: req.body.username,
    password: req.body.password,
    likesCoding: req.body.likesCoding === 'on',
    cohort: req.body.cohort,
  })
  .then(results => {
    console.log(results);
    res.render('userpage', { username: results.username, cohort: results.cohort, id: results._id })
  })
  .catch(err => console.error(err))
})

router.get('/', (req, res) => {
  User.find()
  .then(results => {
    res.render('all-users', { users: results })
  })
})

router.get('/delete-user/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
  .then(results => {
    console.log(results)
    res.render('index')
  })
  .catch(err => console.error(err))
})




module.exports = router;
