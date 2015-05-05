var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("fluxx router")
  res.render('fluxx_view', { title: 'fluxx home' });
});

router.get('/tasks', function(req, res, next) {
  console.log("tasks router")
  res.render('tasks', { title: 'tasks' });
});

module.exports = router;
