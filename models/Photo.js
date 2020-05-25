/**
 * Photo model
 */

module.exports = (bookshelf) => {
	return bookshelf.model('Photo', {
		tableName: 'photos',
		albums() {
			return this.hasMany('Album')
		},
		user() {
			return this.belongsTo('User')
		}
	  })
}