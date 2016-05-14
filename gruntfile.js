module.exports = function(grunt) {
  grunt.initConfig({
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {
          'public/css/main.css': 'resources/scss/main.scss',
          'public/css/login.css': 'resources/scss/login.scss',
        }
      }
    },

    concat: {
      js: {
        src: ['node_modules/']
      }
    },

    watch: {
      scss: {
        files: ['resources/scss/*'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'watch']);

};