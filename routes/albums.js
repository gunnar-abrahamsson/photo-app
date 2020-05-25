const express = require('express');
const router = express.Router();
const { index, show, store, update, destroy } = require('../controllers/album_controller');

/* GET all albums for a user */
router.get('/', index);

/* GET a users specific album */
router.get('/:albumId', show);

/* Create a new album */
router.post('/', store);

/* update a new album */
router.put('/', update);

/* delete a album */
router.delete('/:albumId', destroy);



module.exports = router;