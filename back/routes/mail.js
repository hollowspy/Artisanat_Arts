var express = require('express');
var router = express.Router();
const connection = require('../bdd/bdd.js')
const nodemailer = require("nodemailer");
const smtpTransport = require('../mails/configMail.js')


router.post('/', function(req, res){
    console.log('je rentre dans nodemailer')
    const firstName = req.body.firstName; 
    const lastName = req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const objectMessage = req.body.object
    console.log(req.body)
    smtpTransport.sendMail({
        to : "hollowspy@free.fr", 
        subject : objectMessage,
        text : objectMessage, 
        html : `
                <h1> Bonjour Muriel. Nouveau mail</h1>
                <h3> Vous venez de recevoir un mail de la part ${firstName} ${lastName} </h3> :
                <div> Voici mon message </div>
                <div> ${message}</div>
                <div> Si vous souhaitez répondre à son mail, vous devez répondre à cette adresse : ${email}</div>
                <div> Bonne journée :) </div>`
    })
    if(req.body.message === '') {
        res.send({msg : 'error'})
     }else { 
        res.send({msg : 'success'})
    }
    
});






module.exports = router;