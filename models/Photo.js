/**
 * Photo model
 */

module.exports = (bookshelf) => {
	return bookshelf.model('Photo', {
		tableName: 'photos',
		initialize() {
			this.on('destroying', (model) => {
			  // This is fired before a model is destroyed
			  // detach photo from albums
			   model.albums().detach();
			})
		},
		albums() {
			return this.belongsToMany('Album')
		},
		user() {
			return this.belongsTo('User')
		}
	},{
		fetchById(id, fetchOptions = {}) {
			return new this({id}).fetch(fetchOptions);
		},
	})
}