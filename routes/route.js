const express = require('express');
const router = express.Router();

const Feedback = require('../models/feedback');

// Retrieving feedbacks
router.get('/feedbacks', (req, res, next) => {
  Feedback.find(function(err, feedbacks) {
    res.json(feedbacks);
  })
});

// Add feedback
router.post('/feedback', (req, res, next) => {
  let newFeedback = new Feedback({
    name: req.body.name,
    email: req.body.email,
    input: req.body.input
  });

  newFeedback.save((err, feedback) => {
    if (err) {
      res.json({ msg: 'Failed to add feedback' });
    } else {
      res.json({ msg: 'Feedback added successfully!' });;
    }
  });
});

// Delete feedback
router.delete('/feedback/:id', (req, res, next) => {
  Feedback.remove({ _id: req.params.id }, function(err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
