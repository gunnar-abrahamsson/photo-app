/**
 * User model
 */
const bcrypt = require('bcrypt');

module.exports = (bookshelf) => {
	return bookshelf.model('User', {
		tableName: 'users',
		albums() {
			return this.hasMany('Album')
		},
		photos() {
			return this.hasMany('Photo')
		}
	  },{
        hashSaltRounds: 10,
        async login(email, password) {
            try{
                //get user from db
                const user = await new this({ email }).fetch({require: false});

                //if no user is found return false
                if(!user) {
                    return false;
                }

                //check if password matches
                const hash = user.get('password');

                //return false if password is incorrect
                //return user
                return (await bcrypt.compare(password, hash))
                    ? user
                    :false;

            } catch(error) {
                throw error
            }
        }
	  })
}