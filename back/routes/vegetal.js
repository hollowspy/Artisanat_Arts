var express = require('express');
var router = express.Router();
const connection = require('../bdd/bdd.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('je rentre dans back route get bestiaire')
  connection.query('SELECT * FROM vegetal', function(err, result, fields){
    if (err){
      res.status(500).json({
        "status code" : 500,
        "status message" : "internet servor error"
      })
    }
    else{
      res.send(JSON.stringify(result));
      console.log(result)
    }
  })
});

router.get('/:id', function(req, res, next) {
  console.log('je rentre dans back route get bestiaire')
  let id = req.params.id
  let sql = `SELECT * FROM vegetal WHERE id=${id}`
  connection.query(sql, function(err, result, fields){
    if (err){
      res.status(500).json({
        "status code" : 500,
        "status message" : "internet servor error"
      })
    }
    else{
      res.send(JSON.stringify(result));
      console.log(result)
    }
  })
});

module.exports = router;
