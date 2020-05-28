/**
 * photo_controller
 */
const { Photo, User } = require('../models')

// list all photos for a user
const index = async (req, res) => {

	//get user modle with related photos
	const user = await User.fetchById(req.user.data.id, {
		withRelated: ['photos']
	});
	try {
		//send related photos
		const photos = user.related('photos')
		res.send({
			status: 'success',
			data: photos,
		})
	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exeption thrown when getting photos'
		})
		console.error("photo_controller.index error", error);
	}
};

// list a specific photo for a user
const show = async (req, res) => {
	try{
		//get photo by :photoId where user_id == req.user.data.id;
		const photo = await new Photo({
			id: req.params.photoId,
			user_id: req.user.data.id
		}).fetch({ require: false })

		if(!photo) {
			res.status(404).send({
				status: 'fail',
				data: 'Cant find requested photo'
			})
			return;
		}
		res.send({
			status: 'success',
			data: photo,
		})

	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exeption thrown when trying to get photo form database'
		})
		throw error;
	}
};

// add a photo to a user
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

	const {} = matchedData(req);
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
const destroy = async (req, res) => {
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