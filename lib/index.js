/**
 * Copyright (c) 2014, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 */

'use strict';

var path = require( 'path' ),
	_ = require( 'lodash' ),
	files = [
		path.join( require.resolve( 'requirejs' ), '../../require.js' ),
		path.join( __dirname, '/adapter.js' )
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
		var config = this.conf.amd || this.conf[ 'bender-amd' ];

		if ( this.conf[ 'bender-amd' ] ) {
			this.logger.warn( '"bender-amd" config property is deprecated, please use "amd" instead' );
		}

		if ( config ) {
			_.extend( requireConfig, config );
		}

		done();
	}
};
