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

Add Require.js configuration in `bender-amd` field:

```javascript
var config = {
    applications: {...},

    // add your Require.js configuration
    'bender-amd': {
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

License
-------

MIT, for license details see: [LICENSE.md](https://github.com/benderjs/benderjs-amd/blob/master/LICENSE.md).
