/**
 * Album model
 */

module.exports = (bookshelf) => {
	return bookshelf.model('Album', {
		tableName: 'albums',
		
		initialize() {
			this.on('destroying', (model) => {
			  // This is fired before a model is destroyed
			  // detach photos
			   model.photos().detach();
			})
		},
		photos() {
			return this.belongsToMany('Photo')
		},
		user() {
			return this.belongsTo('User')
		}
	  })
}