var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/questions', function(req, res) {
  res.render('index', { title: 'Diet Survey API' });
});

module.exports = router;
