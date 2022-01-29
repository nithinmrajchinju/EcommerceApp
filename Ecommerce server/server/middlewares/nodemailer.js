const nodemailer = require('nodemailer');
require('dotenv').config()

const sendEmail = async (mailId,token) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: mailId,
        subject: 'Password reset',
        text: `Your password reset OTP is ${token}`
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return error
        } else {
            console.log(`Email sent: ${mailId} ${info.response}`);
            return {message: `${mailId} ${info.response}`}
        }
    });
}

module.exports = {
    sendEmail
}