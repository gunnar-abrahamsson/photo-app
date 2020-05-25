const express = require('express');
const router = express.Router();
const auth_controller = require('../controllers/auth_controller');
const { validateJwtToken }= require('../controllers/middlewares/auth')

// Endpoints for photos and albums
router.use('/photos', [validateJwtToken], require('./photos'));
router.use('/albums', [validateJwtToken], require('./albums'));

// Login a user
router.post('/login', auth_controller.login);
// Register a new user
router.post('/register', auth_controller.register);

module.exports = router;
