var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/questions', function(req, res) {

  res.render('index', { title: 'Film listings API' });
});

module.exports = router;
