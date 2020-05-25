const express = require('express');
const router = express.Router();

/* GET a users photos */
router.get('/', (req, res) => {
    res.status(405).send({
        status: 'success'
    })
});

/* GET a users specific photo */
router.get('/:photoId', (req, res) => {
    res.status(405).send({
        status: 'success'
    })
});

module.exports = router;