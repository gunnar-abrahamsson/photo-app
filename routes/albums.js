const express = require('express');
const router = express.Router();

/* GET a users albums */
router.get('/', (req, res) => {
    res.status(405).send({
        status: 'success'
    })
});

/* GET a users specific album */
router.get('/:albumId', (req, res) => {
    res.status(405).send({
        status: 'success'
    })
});

module.exports = router;