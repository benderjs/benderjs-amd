/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://cksource.com/ckfinder/license
 */

( function( window, bender ) {
	'use strict';

	var unlock = bender.defer(),
		originalRequire = window.require;

	// TODO what if require is never called?
	window.require = function( deps, callback ) {
		window.require = originalRequire; // Restore original require call

		originalRequire( deps, function() {
			unlock();
			callback.apply( null, arguments );
		} );
	};

	window.require.config = originalRequire.config;
	window.require.toUrl = originalRequire.toUrl;

} )( this, bender );
