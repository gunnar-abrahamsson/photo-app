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

module.exports = {
    login,
    register,
}