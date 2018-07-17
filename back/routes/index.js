var express = require('express');
var router = express.Router();
const connection = require('../bdd/bdd.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('je rentre dans index')
 connection.query('SELECT * FROM photo_carousel', function(err, result){
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
