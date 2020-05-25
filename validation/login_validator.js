/**
 * Login validation rules
 */
const { body } = require('express-validator');

const rules = {};
rules.loginRules = [
    //make sure an email is sent
    body('email').isEmail().trim().isLength({min: 6}),
    body('password').isString().trim().isLength({min: 4}),
];

module.exports = {
    ...rules,
}