/**
 * album validation rules
 */
const { body } = require('express-validator');

const rules = {};

// create rules for storing single photo
rules.create = [
    body('title').isString().isLength({ min: 2}),
]
module.exports = {
    ...rules,
}