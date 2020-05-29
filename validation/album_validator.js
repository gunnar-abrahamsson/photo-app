/**
 * album validation rules
 */
const { body,  } = require('express-validator');
const { Photo } = require('../models');

const rules = {};

// create rules for storing single photo
rules.create = [
    body('title').isString().isLength({ min: 2}),
];

rules.updateAlbum = [
    body('title').isString().isLength({ min: 2}),
];

rules.addPhotos = [
    body("photo_ids").isArray().custom(async (value, {req}) => {
        //make sure array only has numbers
        if(value.some(isNaN)){
            return Promise.reject(`Array can only include numbers`);
        }

        //check if photo exists in db
        for(let i = 0; i < value.length; i++) {
            try {
                await new Photo({
                    id: value[i],
                    user_id: req.user.data.id
                }).fetch();
            } catch {
                return Promise.reject(`photo with id: ${value[i]} not found`)
            }
        }
        return Promise.resolve();
    })
];

module.exports = {
    ...rules,
}