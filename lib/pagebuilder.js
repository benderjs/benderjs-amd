var path = require( 'path' ),
	_ = require( 'lodash' ),
	files = [
		path.join( __dirname, '/../node_modules/requirejs/require.js' )
	],
	requireConfig = { };

function build( data ) {
	"use strict";

	data.parts.push( '<head><script src="' + path.join( '/plugins/', path.resolve( __dirname, '../node_modules/requirejs/require.js' ) ) + '"></script></head>' );

	data.parts.push( '<head><script> require.config( ' + JSON.stringify( requireConfig ) + '); </script></head>' );

	return data;
}

module.exports = {
	name: 'bender-pagebuilder-amd',

	files: files,

	attach: function() {
		this.pagebuilders.push( build );

		if ( this.conf['bender-amd'] ) {
			_.extend( requireConfig, this.conf['bender-amd'] );
		}
	}
};
