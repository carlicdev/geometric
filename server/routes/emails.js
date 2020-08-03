const express = require('express');
const router = express.Router();

const Email = require('../models/email');

router.get('/', (req, res) => {
    Email.find().exec()
        .then(result => {
            res.send(result)
        }).catch(err => console.log(err))
});

// Send ContactForm
router.post('/new-message', (req, res) => {
    const { name, email, phone, message } = req.body;
    const newEmail = new Email({
        name,
        email,
        phone,
        message,
    });
    newEmail.save()
        .then(() => {
            res.status(201).json({
                msg: 'Hemos recibido tu mensaje. Nos pondremos en contacto contigo lo antes posible.'
            });
        }).catch(err => {
            res.status(500).json({
                msg: 'Tu mensaje no ha podido enviarse. Por favor inteta de nuevo.'
            });
        });
});

module.exports = router;