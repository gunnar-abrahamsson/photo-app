const express = require('express');
const router = express.Router();

/* GET / */
router.get('/', (req, res) => {
    res.send({ 
        status: 'succes',
        data: '/ working'
    })
});

// Endpoints for photos and albums
router.use('/photos', require('./photos'));
router.use('/albums', require('./albums'));

// Login a user
router.post('/login', (req, res) => {
    res.status(405).send({
        status: 'success'
    })
});
// Register a new user
router.post('/register', (req, res) => {
    res.status(405).send({
        status: 'success'
    })
});

module.exports = router;
