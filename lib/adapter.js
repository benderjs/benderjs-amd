/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://cksource.com/ckfinder/license
 */

( function( window, bender ) {
	'use strict';

	var unlock = bender.defer(),
		originalRequire = window.require;

	// TODO what if require is never called?
	bender.require = function( deps, callback ) {
		originalRequire( deps, function() {
			callback.apply( null, arguments );
			unlock();
		} );
	};

} )( this, bender );
