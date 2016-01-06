# grunt-svgfit

> Renders then saves svg files to their exact bounds

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-svgfit --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-svgfit');
```

## The "svgfit" task

### Overview
In your project's Gruntfile, add a section named `svgfit` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  svgfit: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  svgfit: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

### Why
Pulling svg's as part of a work process and they weren't tight to their bounds meaning they sometimes displayed strangely in the browser, wanted a pre process way of setting them to their exact bounds.

## Release History
* 0.2.0 - Fixed async calls
* 0.1.0 - Initial commit

## License
Copyright (c) 2015 Michael Mellor
Licensed under the MIT license.
