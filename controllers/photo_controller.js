/**
 * photo_controller
 */
const { Photo } = require('../models')

// list all photos for a user
const index = async (req, res) => {
    try {
        const photos = await Photo.fetchAll();
        res.send({
            status: 'success',
            data: photos,
        })
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: 'Exeption thrown when getting photos'
        })
        throw error
    }
};

// list a specific photo for a user
const show = (req, res) => {
    res.status(405).send({
        status: 'success'
    })
};

// add a photo to a user
const store = (req, res) => {
    res.status(405).send({
        status: 'success'
    })
};

// // Update photo
// const update = (req, res) => {
//     res.status(405).send({
//         status: 'success'
//     })
// };

//remove a photo and it's conections VG
const destroy = (req, res) => {
    res.status(405).send({
        status: 'success'
    })
};


module.exports = {
    index,
    show,
    store,
    destroy,
}