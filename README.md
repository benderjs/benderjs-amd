benderjs-amd
============

Basic AMD support for [Bender.js](https://github.com/benderjs/benderjs) using [Require.js](http://requirejs.org/).

Installation
------------

```
npm install benderjs-amd
```

Usage
-----

Add `benderjs-amd` to the `plugins` array in your `bender.js` configuration file:

```javascript
var config = {
    applications: {...}

    browsers: [...],

    plugins: ['benderjs-amd'], // load the plugin

    tests: {...}
};

module.exports = config;
```

Add Require.js configuration in `amd` field:

```javascript
var config = {
    applications: {...},

    // add your Require.js configuration
    'amd': {
        baseUrl: 'foo/bar/',
        paths: {
            foo: 'baz/foo'
        }
    },

    browsers: [...],

    plugins: ['benderjs-amd'], // load the plugin

    tests: {...}
};
```

From now on the you can use `require` to load scripts to test:

```javascript
require( [ 'Some/Module/ToTest' ], function( ToTest ) {
	"use strict";

	describe( 'ToTest', function() {
		it( 'should be tested with benderjs', function() {
			var testObj = new ToTest();
			expect( testObj.isRunning() ).to.be.true;
			// ...
		} );
	} );

} );
```

License
-------

MIT, for license details see: [LICENSE.md](https://github.com/benderjs/benderjs-amd/blob/master/LICENSE.md).
