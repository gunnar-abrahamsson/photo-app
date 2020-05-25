/**
 * user_controller
 */

const login = (req, res) => {
	res.status(405).send({
		status: 'success'
	})
};

const register = (req, res) => {
	res.status(405).send({
		status: 'success'
	})
};

const getTokenFromHeaders = (req) => {
	// check if there is any Authorization header
	if (!req.headers.authorization) {
		return false;
	}
	//split authorizaton header into its pieces
	const [authType, token] = req.headers.authorization.split(' ')
	//check that the Authorization type is Bearer
	if (authType.toLowerCase() !== 'bearer') {
		return fasle;
	}

	return token;
}

module.exports = {
	login,
	register,
	getTokenFromHeaders,
}