/**
 * Authentication middleware
 */
const jwt = require('jsonwebtoken');
const { getTokenFromHeaders } = require('../auth_controller');

const validateJwtToken = (req, res, next) => {
	//get token from headers
	const token = getTokenFromHeaders(req);
	//if no token send fail response
	if (!token) {
		res.status(401).send({
			status: 'fail',
			data: 'No token found in request headers'
		});
		return;
	}

	let payload = null;
	try{
		// Validate token and extract payload
		// Reject if token is invalid
		payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
		
		
	} catch (error) {
		res.status(401).send({
			status: 'fail',
			data: 'Authentication failed'
		});
		throw error
	}
	//attach payload to req.user
	req.user = payload;
	
	next();
}

module.exports = {
	validateJwtToken,
}