const express = require('express');
const axios = require('axios');
const router = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'survey'
});

db.connect(function(err){
  if(!err) {
      console.log("Database connected");    
  } else {
      console.log("Error connecting database");    
  }
});

router.get('/questions', async function(req, res) {
  let sql = 'SELECT * FROM questions INNER JOIN options ON questions.id = options.question_id';
  let query = db.query( sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = router;
