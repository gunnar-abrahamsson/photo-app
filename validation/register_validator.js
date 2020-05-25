/**
 * Login validation rules
 */
const { body } = require('express-validator');
const { User } = require('../models');

const rules = {};
rules.createRules = [
    body('email').isEmail().trim().isLength({min: 6}).custom(async value => {
        const user = await new User({ email: value}).fetch({ require: false });
        console.log("email query result: ", user);

        if(user){
            return Promise.reject(`Email: ${value} already exist`)
        }

        return Promise.resolve();

    }),
    body('password').isString().trim().isLength({min: 4}),
    body('first_name').isString().trim().isLength({min: 2}),
    body('last_name').isString().trim().isLength({min: 2}),
];

module.exports = {
    ...rules,
}