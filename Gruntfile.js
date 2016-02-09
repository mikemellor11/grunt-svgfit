/*
 * grunt-svgfit
 * 
 *
 * Copyright (c) 2015 Mike Mellor
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['.tmp']
    },

    // Configuration to be run (and then tested).
    svgfit: {
      expand: {
        files: [
          {
            expand: true,
            cwd: 'test/svg/',
            src: ['*.svg'],
            dest: 'tmp/expand/',
          },
          {
            expand: true,
            cwd: 'test/svg/',
            src: ['*.svg'],
            dest: 'tmp/expand2/',
          }
        ]
      },
      compact: {
        src: ['test/svg/*.svg'],
        dest: 'tmp/compact/'
      },
      fileObject: {
        files: {
          'tmp/fileObject/test.svg': ['test/svg/search.svg']
        }
      },
      fileArray: {
        files: [
          {src: ['test/svg/search.svg'], dest: 'tmp/fileArray/'}
        ]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the ".tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'svgfit', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
