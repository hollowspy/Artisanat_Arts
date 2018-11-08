var express = require('express');
var router = express.Router();
const connection = require('../../bdd/bdd.js')

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log('body bestiaire', req.body)
  const owner = req.body.owner
  console.log('owner', owner)
  if (owner === 'null' || owner === undefined || owner === '0'){
    requeteSQL = `SELECT * from bestiaire order by id DESC`;
  } else {
    requeteSQL = `SELECT * FROM bestiaire WHERE owner = ${owner} order by id DESC`; 
  }
 
  console.log('requeteSQL', requeteSQL)
  connection.query(requeteSQL, function(err, result, fields){
    if (err){
      res.status(500).json({
        "status code" : 500,
        "status message" : "internet servor error"
      })
    }
    else{
      res.send(JSON.stringify(result));
     // console.log(result)
    }
  })
});

router.get('/:id', function(req, res, next) {
  console.log('je rentre dans back route get bestiaire')
  let id = req.params.id
  let sql = `SELECT * FROM bestiaire WHERE id=${id}`
  connection.query(sql, function(err, result, fields){
    if (err){
      res.status(500).json({
        "status code" : 500,
        "status message" : "internet servor error"
      })
    }
    else{
      res.send(JSON.stringify(result));
     // console.log(result)
    }
  })
});

module.exports = router;
