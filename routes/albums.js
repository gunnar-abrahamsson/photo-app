/**
 * Album router
 */
const express = require('express');
const router = express.Router();
const { index, show, store, update, destroy, storePhotosToAlbum, destroyPhotosFromAlbum } = require('../controllers/album_controller');
const { create, addPhotos } = require('../validation/album_validator');

/* GET all albums for a user */
router.get('/', index);

/* GET a users specific album with photos */
router.get('/:albumId', show);

/* Create a new album */
router.post('/', create, store);

/* update a albums atributes */
router.put('/:albumId', update);

/* delete a album */
router.delete('/:albumId', destroy);

/* adds photos to a album */
router.post('/:albumId/photos', addPhotos, storePhotosToAlbum);

/* Removes photos from a album */
router.delete('/:albumId/photos/:photoId', destroyPhotosFromAlbum);

module.exports = router;