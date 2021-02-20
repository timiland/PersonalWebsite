const express = require('express');

const router = express.Router();

const transporter = require('../config');

const dotenv = require('dotenv');

dotenv.config();

// Routes
router.post('/send', (req, res) => {

    try{

    let { name, email, subject, message } = req.body.data;

    console.log(name, email, subject, "API route hit");

    const mailOptions = {
        
        from: email,
        to: 'timothyiland@gmail.com',
        subject: `New Email From Your Website${subject == "" ? "" : ", RE: "+ subject}`,
        html:`
        <p> You have a new email from your website! </p>
        <h3> Details </h3>
        <ul>
            <li>Name: ${name} </li>
            <li>Email: ${email} </li>
            <li>Message: ${message} </li>
        </ul>
        `
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            res.status(500).send({
                success:false,
                message: 'Something went wrong. Try again later'
            });
        } else {
            res.send({
                success: true,
                message: 'Thanks for contacting me. I will get back to you as soon as possible.'
            });
        }
    });

    } catch (error) {
        res.status(500).send({
            success:false,
            message: 'Something went wrong. Try again later'
        });
    }
});


module.exports = router;