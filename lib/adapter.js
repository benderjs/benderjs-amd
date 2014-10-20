/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://cksource.com/ckfinder/license
 */

( function( window, bender ) {
	'use strict';

	var originalBenderStart = bender.start;

	bender.start = function() {};

	var originalRequire = window.require;

	window.require = function( deps, callback ) {
		window.require = originalRequire; // Restore original require call

		originalRequire( deps, function() {
			callback.apply( null, arguments );
			originalBenderStart();
		} );
	};

	window.require.config = originalRequire.config;
	window.require.toUrl = originalRequire.toUrl;

} )( this, bender );
