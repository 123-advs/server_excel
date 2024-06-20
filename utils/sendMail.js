const nodemailer = require('nodemailer');
const asyncHandler = require('express-async-handler');

const sendMail = asyncHandler(async ({ email, html }) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, //true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_NAME,
            pass: process.env.EMAIL_APP_PASSWORD,
        },
    });

    let info = await transporter.sendMail({
        from: '"QuizLet " <no-relply@quizlet.com>', // sender address
        to: email, // list of receivers
        subject: "Forgot password", // Subject line
        text: "Hello world?", // plain text body
        html: html, // html body
    });

    return info
})

module.exports = sendMail
// mongodb+srv://vovanchien135:123456q@cluster0.kvteurr.mongodb.net/food_panda?retryWrites=true&w=majority&appName=Cluster0