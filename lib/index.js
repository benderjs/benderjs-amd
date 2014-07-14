/**
 * Copyright (c) 2014, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 */

var path = require( 'path' ),
	fs = require( 'fs' );

module.exports = {
	name: 'bender-amd',

	attach: function() {
		var bender = this;

		fs.readdirSync( __dirname ).forEach( function( file ) {
			var plugin;

			if ( file === 'index.js' ) {
				return;
			}

			plugin = require( path.join( __dirname, file ) );

			bender.use( plugin );

			if ( plugin.files ) {
				bender.plugins.addFiles( plugin.files );
			}
		} );
	}
};
