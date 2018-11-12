const nodemailer = require("nodemailer");

const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    host: 'smtp-relay.gmail.com',
    auth: {
        user: "wild.not.you@gmail.com",
        pass: "wow&wow12"
    }
});


module.exports = smtpTransport;