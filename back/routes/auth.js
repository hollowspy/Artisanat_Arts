var express = require('express');
var router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
const connection = require('../bdd/bdd.js')
const bcrypt = require('bcrypt');
const smtpTransport = require('../mails/configMail.js')

router.post('/forgotPassword', (req, res)=> {
    console.log('je rentre dans forgotPassword back')
    console.log(req.body)
    const email = req.body.email;
    
   // const token = jwt.sign(email, 'tokenForgotMail')
    const token = jwt.sign({email:'tokenForgotMail'}, 
    "Stack", {

        expiresIn: '60s' // expires in 365 days

   });
    const requeteSQL = `SELECT mail FROM admin WHERE mail = '${email}'`; 
    console.log(requeteSQL)
    connection.query(requeteSQL, (error, result)=> {
        if (error) throw error
        else {
            if (result.length ===  1){
                console.log('mail bien trouvé')
                console.log('token', token)

                smtpTransport.sendMail({
                    to : email, 
                    subject : "récupération du mot de passe La Mure Mosaïque",
                    text : "récupération du mot de passe La Mure Mosaïque", 
                    html : `
                            <div> Vous venez de demander un nouveau mot de passe pour vous connecter
                            à LaMure Mosaïque</div>
                            <div> Veuillez cliquez sur ce lien pour réinitialiser votre mot de passe</div>
                            <a href="http://localhost:4200/auth/${token}/updatePassword/"> Click here </a>
                            <div> Cordialement, l'équipe LaMure Mosaïque</div>`
                })
                res.send(JSON.stringify({ 
                    message : "succes",
                    token : token, 
                    mail : email, 
                }))
            }
            else{
                console.log('pas de resultat')
                res.send(JSON.stringify({
                    message : "pas de mail trouvé" 
                }))
            }
        }
    })
});


router.post('/updatePassword', (req, res)=> {
    console.log('je rentre dans updatePassword')
    const password = req.body.password; 
    const passwordCheck = req.body.passwordCheck;
    const email = req.body.email;
    if (password !== passwordCheck){
        res.send(JSON.stringify({
            message : "les mots de passes sont différents"
        }))
    }
    else{
        const hash = bcrypt.hashSync(req.body.password, 10)
        let requeteSQL = `UPDATE admin SET password = '${hash}' WHERE mail = '${email}'`;
        connection.query(requeteSQL, (error, result)=> {
            if (error) throw error
            else {
                if (result.length > 1){
                    console.log('pas de mail trouvé'); 
                    res.send(JSON.stringify({
                        message : "pas de mail trouvé"
                    }))
                }
                else{
                    res.send(JSON.stringify({
                        message : "mail mis à jour"
                    }))
                }
               
            }
        })
    }
});



module.exports = router;