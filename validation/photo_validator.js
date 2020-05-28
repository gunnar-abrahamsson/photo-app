/**
 * auth validation rules
 */
const { body } = require('express-validator');

const rules = {};

// create rules for storing single photo
rules.create = [
    body('title').isString().isLength({ min: 2}),
    body('url').isURL(),
    body('comment').optional().isString().isLength({ min: 1}),
]
module.exports = {
    ...rules,
}