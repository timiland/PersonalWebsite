const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: "timilandwebsitemailer@gmail.com", //process.env.email, // your email address to send email from
    pass: "Little987" //process.env.password // your gmail account password
  }
});

module.exports = transporter;