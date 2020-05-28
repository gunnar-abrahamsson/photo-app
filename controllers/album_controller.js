/**
 * album_controller
 */


//list all albums for user
const index = (req, res) => {
	res.status(405).send({
		status: 'success'
	})
};

// list a spesific album with photos for user
const show = (req, res) => {
	res.status(405).send({
		status: 'success'
	})
};

// create new album
const store = (req, res) => {
	res.status(405).send({
		status: 'success'
	})
};

// add photos to album VG
const update = (req, res) => {
	res.status(405).send({
		status: 'success'
	})
};

// delete album and all conections VG
const destroy = (req, res) => {
	res.status(405).send({
		status: 'success'
	})
};

// store a photo to a album
const storePhotosToAlbum = (req, res) => {
	res.status(405).send({
		status: 'success'
	})
};

// Delete a photo from a album
const destroyPhotosFromAlbum = (req, res) => {
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