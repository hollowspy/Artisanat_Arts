var express = require('express');
var router = express.Router();
var multer = require('multer'); 
const connection = require('../../bdd/bdd.js')
var fs = require('fs');
var path = require('path');

var store = multer.diskStorage({
    destination:function(req, file, cb){
        console.log('test file', req.file)
        cb(null, './public/images/carousel')
    }, 
    filename:function(req, file,cb){
        cb(null, Date.now()+'_'+file.originalname);
    },
 
});
let pbFormatImage = false;
var upload = multer({
    storage:store, 
    fileFilter:function(req,file,cb){
        console.log('test file1', req.file)
        const ext = path.extname(file.originalname); 
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg'){
            console.log('erreur file type image')
            pbFormatImage = true
            return cb (new Error('Only jpeg, jpg or png are allowed'))
        }
        cb(null, true)
    },
    limits: {
        fileSize: 3000000
    }
    })
    .single('file');


router.get('/', function(err, res){
    res.send('ok ca marche')
})

router.post('/', function(req, res, next){
    upload(req, res, function(err){
        const id = req.body.id;
        console.log('id', id)
        if (err){
            console.log('err', err)
            return res.status(501).json({
                error : err,
                formatImage : pbFormatImage
            })
        }

        else{
            let requeteSQLSelect = `SELECT * FROM photo_carousel WHERE id = '${id}'`;
            console.log(requeteSQLSelect);
            connection.query(requeteSQLSelect, (error, result)=> {
                if (error) throw error 
                else {
                    console.log(result)
                    const fileToDelete = result[0].Asource.split('/').slice(-1)[0];
                    console.log('filetoDelete', fileToDelete)
                    // const test = fileToDelete.slice(-1)[0]
                    // console.log(test)
                    if (result.length === 0){
                        res.send(JSON.stringify({
                            message : "Pas de mis à jour ! "
                        }))
                    } else {
                        const endName = req.file.filename
                        const fullName = `http://localhost:4000/images/carousel/${endName}`
                        const originalname = req.file.originalname;
                        let requeteSQLUpdate = `UPDATE photo_carousel SET 
                                                Asource = '${fullName}', 
                                                name =  '${originalname}' WHERE id='${id}'`
                        connection.query(requeteSQLUpdate, (erreur, resultat)=> {
                            if (erreur) throw erreur
                            else {
                                res.send(JSON.stringify({
                                    message : 'source photo MAJ'
                                 }))
                            //console.log('fileToDeleteEnd', fileToDelete )
                            fs.stat(`public/images/carousel/${fileToDelete}`, function (err) {
                               if (err) {
                                    return console.error(err);
                                }
                             
                                fs.unlink(`public/images/carousel/${fileToDelete}`,function(err){
                                     if(err) return console.log(err);
                                     console.log('file deleted successfully');
                                });  
                             });
                            }                           
                        })
                    }
                }
            })
        }
      })
})

module.exports = router;
