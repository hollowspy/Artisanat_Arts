var express = require('express'); 
var router = express.Router(); 
const connection = require('../../bdd/bdd.js')


router.post('/', (req, res) => {
  console.log('body carousel')
  const owner = req.body.owner
   connection.query('SELECT * FROM photo_carousel', (error, result)=> {
        if (error){
            res.status(500).json({
              "status code" : 500,
              "status message" : "internet servor error"
            })
          }
          else{
            res.send(JSON.stringify(result));
        }
    }) 
})



module.exports = router;