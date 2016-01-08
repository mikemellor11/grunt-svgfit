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
  var async = require("async");

  grunt.registerMultiTask('svgfit', 'Renders then saves svg files to their exact bounds', function() {
    var options = this.options({
    });

    if( this.files.length === 0 ){
      grunt.log.writeln( "No files to read!" );
      return;
    }

    var done = this.async();

    async.each(this.files,
      function(f, callback){
        var src = f.src.filter(function(filepath) {
          if (!grunt.file.exists(filepath)) {
            grunt.log.warn('Source file "' + filepath + '" not found.');
            return false;
          } else {
            return true;
          }
        });

        svgfit.convert(src, f.dest).then(function(){
          callback();
        });
      },
      function(err){
        done();
      }
    );
  });

};
