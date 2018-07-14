var express = require('express');
var router = express.Router();
const connection = require('../bdd/bdd.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM bestiaires', function(err, result, fields){
    if (err){
      res.status(500).json({
        "status code" : 500,
        "status message" : "internet servor error"
      })
    }
    else{
      res.json(result); 
      console.log(result)
    }
  })
});

module.exports = router;
