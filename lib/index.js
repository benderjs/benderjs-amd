/**
 * Copyright (c) 2014, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 */

'use strict';

var path = require( 'path' ),
	_ = require( 'lodash' ),
	files = [
		path.join( __dirname, '/../node_modules/requirejs/require.js' )
	],
	requireConfig = {};

module.exports = {
	name: 'bender-pagebuilder-amd',
	files: files,
	include: files,

	build: function( data ) {
		data.parts.push( '<head><script>require.config(' + JSON.stringify( requireConfig ) + ');</script></head>' );
		return data;
	},

	init: function( done ) {
		if ( this.conf.amd ) {
			_.extend( requireConfig, this.conf.amd );
		}

		done();
	}
};
