/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://cksource.com/ckfinder/license
 */

( function( window, bender ) {
	'use strict';

	bender.require = function( deps, callback ) {
		var unlock = bender.defer();

		window.require( deps, function() {
			callback.apply( null, arguments );
			unlock();
		} );
	};

} )( this, bender );
