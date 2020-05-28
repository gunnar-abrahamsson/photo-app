/**
 * album_controller
 */
const { validationResult, matchedData } = require('express-validator');
const { Album, User } = require('../models')

//list all albums for user
const index = async (req, res) => {
	//get user modle with related albums
	const user = await User.fetchById(req.user.data.id, {
		withRelated: ['albums']
	});
	try {
		//send related albums
		const albums = user.related('albums')
		res.send({
			status: 'success',
			data: albums,
		})
	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exeption thrown when getting albums'
		})
		console.error("album_controller.index error", error);
	}
};

// list a spesific album with photos for user
const show = async (req, res) => {
    try{
		//get album and related photo wher user_id == req.user.data.id
		const album = await new Album({
			    id: req.params.albumId,
			    user_id: req.user.data.id
            })
            .fetch({ 
                require: false,
                withRelated: ['photos'],
            })

		if(!album) {
			res.status(404).send({
				status: 'fail',
				data: 'Cant find requested album'
			})
			return;
		}
		res.send({
			status: 'success',
			data: album.toJSON({ omitPivot: true }), //remove __pivot__
		})

	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exeption thrown when trying to get album form database'
		})
		throw error;
	}
};

// create new album
const store = async (req, res) => {
	//make sure request is valid
	const errors = validationResult(req);

	if(!errors.isEmpty()){
		res.status(422).send({
			status: 'fail',
			data: errors.array()
		})
		return;
	}

	const validData = matchedData(req);
	// add related user
	validData.user_id = req.user.data.id
	try{
		//store album to db
		const album = await new Album(validData).save()
		res.send({
			status: 'success',
			data: album,
		})
	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exeption thrown when trying to store album'
		})
		throw error;
	}
};

// update album title
const update = async (req, res) => {
	res.status(405).send({
		status: 'success'
	})
};

// delete album and all conections VG
const destroy = async (req, res) => {
	res.status(405).send({
		status: 'success'
	})
};

// store a photo to a album
const storePhotosToAlbum = async (req, res) => {
	//make sure request is valid
	const errors = validationResult(req);

	if(!errors.isEmpty()){
		res.status(422).send({
			status: 'fail',
			data: errors.array()
		})
		return;
	}

	const validData = matchedData(req);
	// add related user
	validData.user_id = req.user.data.id
	try{
        //get album /:albumId
        const album = await new Album({
            id: req.params.albumId,
            user_id: req.user.data.id
        }).fetch({ require: false });
        
        if(!album) {
            res.status(404).send({
                status: 'fail',
				data: 'Cant find requested album'
			})
			return;
        }
        // attach photos to album
        /**
         * 
         * Still makes duplicate relations
         */
        await album.photos().attach(validData.photo_id);
        res.send({
			status: 'success',
			data: album,
		})
	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exeption thrown when trying to add photos to album'
		})
		throw error;
	}
};

// Delete a album from a album
const destroyPhotosFromAlbum = async (req, res) => {
	res.status(405).send({
		status: 'success'
	})
};



module.exports = {
	index,
	show,
	store,
	update,
	destroy,
	storePhotosToAlbum,
	destroyPhotosFromAlbum,
}