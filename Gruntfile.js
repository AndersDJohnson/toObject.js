module.exports = function (grunt) {

  grunt.initConfig({

    copy: {
      dist: {
        src: 'src/index.js',
        dest: 'dist/toObject.js',
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/toObject.min.js': ['src/index.js']
        }
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('dist', ['copy:dist', 'uglify:dist']);

};
