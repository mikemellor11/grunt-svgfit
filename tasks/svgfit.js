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
  var path = require("path");

  grunt.registerMultiTask('svgfit', 'Renders then saves svg files to their exact bounds', function() {
    var options = this.options({
    });

    if( this.files.length === 0 ){
      grunt.log.writeln( "No files to read!" );
      return;
    }

    var done = this.async();

    var tempSrc = [];
    var tempDest = [];

    this.files.forEach(function(d, i){
      d.src.forEach(function(d){
        tempSrc.push(path.normalize(d));
      });

      tempDest.push(path.normalize(d.dest));
    });

    if(tempDest.length <= 1){ // This should be changed in svg fit really, array with a single object currently fails as it's not a string
      tempDest = tempDest[0];
    }

    svgfit.convert(tempSrc, tempDest).then(function(msg){
      grunt.log.ok(msg.join('\n'));
      done();
    });
  });

};
