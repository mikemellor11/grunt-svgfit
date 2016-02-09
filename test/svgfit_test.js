'use strict';

var grunt = require('grunt');

exports.svgfit = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(5);

    var actual = grunt.file.read('tmp/expand/search.svg');
    var expected = grunt.file.read('test/expected/expand/search.svg');
    test.equal(actual, expected, 'expand - svg should fit exact bounds');

    var actual = grunt.file.read('tmp/expand2/search.svg');
    var expected = grunt.file.read('test/expected/expand2/search.svg');
    test.equal(actual, expected, 'expand2 - svg should fit exact bounds');

    var actual = grunt.file.read('tmp/compact/search.svg');
    var expected = grunt.file.read('test/expected/compact/search.svg');
    test.equal(actual, expected, 'compact - svg should fit exact bounds');

    var actual = grunt.file.read('tmp/fileArray/search.svg');
    var expected = grunt.file.read('test/expected/fileArray/search.svg');
    test.equal(actual, expected, 'fileArray - svg should fit exact bounds');

    var actual = grunt.file.read('tmp/fileObject/test.svg');
    var expected = grunt.file.read('test/expected/fileObject/test.svg');
    test.equal(actual, expected, 'fileObject - svg should fit exact bounds');

    test.done();
  },
  allFilesProcessed: function(test) {
    test.expect(5);

    var actual = grunt.file.expand({cwd: 'tmp/expand' }, '*').length;
    var expected = grunt.file.expand({cwd: 'test/expected/expand' }, '*').length;
    test.equal(actual, expected, 'expand - should be same number of output files as input');

    var actual = grunt.file.expand({cwd: 'tmp/expand2' }, '*').length;
    var expected = grunt.file.expand({cwd: 'test/expected/expand2' }, '*').length;
    test.equal(actual, expected, 'expand2 - should be same number of output files as input');

    var actual = grunt.file.expand({cwd: 'tmp/compact' }, '*').length;
    var expected = grunt.file.expand({cwd: 'test/expected/compact' }, '*').length;
    test.equal(actual, expected, 'compact - should be same number of output files as input');

    var actual = grunt.file.expand({cwd: 'tmp/fileArray' }, '*').length;
    var expected = grunt.file.expand({cwd: 'test/expected/fileArray' }, '*').length;
    test.equal(actual, expected, 'fileArray - should be same number of output files as input');

    var actual = grunt.file.expand({cwd: 'tmp/fileObject' }, '*').length;
    var expected = grunt.file.expand({cwd: 'test/expected/fileObject' }, '*').length;
    test.equal(actual, expected, 'fileObject - should be same number of output files as input');

    test.done();
  }
};
