/*
 * grunt-svgfit
 * 
 *
 * Copyright (c) 2015 Mike Mellor
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var svgfit = require('svgfit');

  grunt.registerMultiTask('svgfit', 'Renders then saves svg files to their exact bounds', function() {
    var options = this.options({
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });

      svgfit.convert(src, f.orig.dest);
    });
  });

};
