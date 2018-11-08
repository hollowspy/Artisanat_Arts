var express = require('express');
var router = express.Router();
var multer = require('multer'); 
const connection = require('../../bdd/bdd.js')
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

router.get('/', (req, res)=> {
    res.send('ok upload Bestiaire')
})


var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './public/images/upload');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now()+'_'+file.originalname);
    }
  });


var upload = multer({
    storage:storage, 
    fileFilter:function(req,file,cb){
        const ext = path.extname(file.originalname); 
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg'){
            console.log('erreur file type image')
           
            return cb (new Error('Only jpeg, jpg or png are allowed'))
        }
        cb(null, true)
    },
    limits: {
        fileSize: 3000000
    }
    })
    .array('file',6);
  

  
  router.post('/',function(req,res){
      upload(req,res, function(err) {
       
          if(err) {
              console.log('erreur', err)
              return res.status(501).json({
                error : err,
            })
          }else{
            connection.query('SELECT * FROM bestiaire ORDER BY ID DESC LIMIT 1', (error, result)=> {
                if (error) throw error
                else {
                    console.log('result',result[0])
                    const id = result[0].id
                    const sourceUrl = `http://localhost:4000/images/bestiaire/${id}/`
                    let Aphoto_principale = `${sourceUrl}`+req.files[0].filename;
                    let Aphoto_annexe2 = `${sourceUrl}`+req.files[1].filename;
                    let Aphoto_annexe3 = `${sourceUrl}`+req.files[2].filename;
                    let Aphoto_annexe4 = `${sourceUrl}`+req.files[3].filename;
                    let Aphoto_annexe5 = `${sourceUrl}`+req.files[4].filename;
                    let Aphoto_annexe6 = `${sourceUrl}`+req.files[5].filename;
                    console.log('source photos', Aphoto_principale, Aphoto_annexe2, Aphoto_annexe3, Aphoto_annexe4,Aphoto_annexe5, Aphoto_annexe6)
                  
                    requeteSQL = `UPDATE bestiaire SET 
                                Aphoto_principale = '${Aphoto_principale}', 
                                Aphoto_annexe2 =  '${Aphoto_annexe2}', 
                                Aphoto_annexe3 =  '${Aphoto_annexe3}', 
                                Aphoto_annexe4 =  '${Aphoto_annexe4}', 
                                Aphoto_annexe5 =  '${Aphoto_annexe5}', 
                                Aphoto_annexe6 =  '${Aphoto_annexe6}' 
                                WHERE id='${id}';`
                    console.log(requeteSQL)
                    connection.query(requeteSQL, (erreur, resultat) => {
                        if (erreur) throw erreur
                        else {
                           const srcFolder = `public/images/bestiaire/${id}`
                            mkdirp(srcFolder, function(err) { 
                                if (err) throw err;
                                else {
                                    console.log('création dossier ok')
                                }
                            });
                            for (let i = 0; i < req.files.length; i++) {
                                let oldPath = req.files[i].path
                                let filename = req.files[i].filename
                                console.log('oldPath', oldPath)
                                let newPath = `public/images/bestiaire/${id}/${filename}`
                                
                                console.log('new path', newPath)
                                fs.readFile(oldPath, function(e, data){
                                    fs.writeFile(newPath, data, function(err){
                                        fs.unlink(oldPath, function(){
                                            if(e) throw e; 
                                            else{
                                                console.log('déplacement du fichier effectué')
                                            }
                                        })
                                    })
                                })
                                
                            }

                                res.send(JSON.stringify({
                                message : 'source photo MAJ'
                             }))
                        }
                    })
                   

                }
            })
        }
      
      });
  });





module.exports = router;