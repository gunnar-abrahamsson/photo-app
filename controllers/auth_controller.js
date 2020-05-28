/**
 * auth_controller
 */
const bcrypt = require('bcrypt');
const { validationResult, matchedData } = require('express-validator');
const { User } = require('../models');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
	//make sure request is valid
	const errors = validationResult(req);

	if(!errors.isEmpty()){
		res.status(422).send({
			status: 'fail',
			data: errors.array()
		})
		return;
	}

	const {email, password} = matchedData(req);

	let user = null;
	try {
		// try to login user
		user = await User.login(email, password);
	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exeption thrown when trying to login'
		})
		console.error("auth_controller.login error", error);
	}
	//fail if no user is returned
	if (!user) {
		res.status(401).send({
			status: 'fail',
			data: 'Authentication required'
		});
		return;
	}

	//construct JWT payload
	const payload = {
		data: {
			id: user.get('id'),
			email: user.get('email'),
		}
	}

	// sign payload and get access-token
	const access_token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_LIFETIME || '1h'})

	// sign payload and get refresh-token
	const refresh_token = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_LIFETIME || '1w'})

	res.send({
		status: 'success',
		data: {
			access_token,
			refresh_token,
		},
	})
};

const register = async (req, res) => {
	//check for errors in request
	const errors = validationResult(req)

	if(!errors.isEmpty()) {
		res.status(422).send({
			status: 'fail',
			data: errors.array()
		})
		return;
	}

	const validData = matchedData(req);

	// generate a hash of validData.password
	// set hash of validData.password to validData.password
	try{
		validData.password = await bcrypt.hash(validData.password, User.hashSaltRounds);
	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exeption thrown when hashing the password when creating the user'
		})
		throw error;
	}


	try {
		//create a new user with the valid data
		const storedUser = await new User(validData).save();
		console.log('new user: ', storedUser);
		res.send({
			status: 'success',
			data: storedUser
		})
	}  catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exception thrown when trying to store a user in the database'
		})
		throw error
	}
}

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