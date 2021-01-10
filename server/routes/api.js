const express = require('express');

const router = express.Router();

const transporter = require('../config');

const dotenv = require('dotenv');

dotenv.config();

// Routes
router.post('/send', (req, res) => {

    try{
    console.log(req.body);

    // const mailOptions = {
    //     from: req.body.email,
    //     to: 'timothyiland@gmail.com',
    //     subject: req.body.subject,
    //     html:`
    //     <p> You have a new email from your website! </p>
    //     <h3> Details </h3>
    //     <ul>
    //         <li>Name: ${req.body.name} </li>
    //         <li>Email: ${req.body.email} </li>
    //         <li>Message: ${req.body.message} </li>
    //     </ul>
    //     `
    // };

    // transporter.sendMail(mailOptions, function(err, data) {
    //     if (err) {
    //         res.status(500).send({
    //             success:false,
    //             message: 'Something went wrong. Try again later'
    //         });
    //     } else {
    //         res.send({
    //             success: true,
    //             message: 'Thanks for contacting me. I will get back to you as soon as possible.'
    //         });
    //     }
    // });

    } catch (error) {
        res.status(500).send({
            success:false,
            message: 'Something went wrong. Try again later'
        });
    }
});


module.exports = router;