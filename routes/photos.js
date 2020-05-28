/**
 * Photos router
 */
const express = require('express');
const router = express.Router();
const { index, show, store, update, destroy } = require('../controllers/photo_controller');
const { create, updatePhoto} = require('../validation/photo_validator');

/* GET all photos for a user */
router.get('/', index);

/* GET a specific photo if the user owns it */
router.get('/:photoId', show);

/* Create a new photo */
router.post('/', create, store);

/* update a photo */
router.put('/:photoId', updatePhoto, update);

/* delete a photo */
router.delete('/:photoId', destroy);

module.exports = router;