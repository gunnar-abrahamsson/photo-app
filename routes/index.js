/**
 * Index router
 */
const express = require('express');
const router = express.Router();
const auth_controller = require('../controllers/auth_controller');
const { validateJwtToken }= require('../controllers/middlewares/auth')
const { loginRules, createRules } = require('../validation/auth_validator');

// Endpoints for photos and albums
// Need JWT for access any of the routs
router.use('/photos', [validateJwtToken], require('./photos'));
router.use('/albums', [validateJwtToken], require('./albums'));

// Login a user
router.post('/login', [loginRules], auth_controller.login);
// Register a new user
router.post('/register', [createRules], auth_controller.register);

// refresh a users token
router.post('/refresh', auth_controller.refresh);

module.exports = router;
