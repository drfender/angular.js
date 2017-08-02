module.exports = function(grunt) {


  grunt.initConfig({
  	sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'src/css/min.style.css': 'src/scss/*.scss'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 3 versions', 'ie 8', 'ie 9']
      },
      dist: {
        files: {
          'dist/css/style.css': 'src/css/min.style.css'
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/js/script.min.js': ['src/js/script.js']
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      css: {
        files: 'src/scss/style.scss',
        tasks: ['sass','autoprefixer']
      },
      html: {
        files: ['dist/*.html']
      }//,
      //js: {
      //  files: 'src/js/script.js',
      //  tasks: ['uglify']
      //}
    },

    

    express: {
      all: {
        options: {
          port: 1300,
          hostname: 'localhost',
          bases: ['dist']
        }
      }
    }

  });

 
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  
  grunt.registerTask('default', ['sass', 'autoprefixer', 'uglify']);
  grunt.registerTask('server', ['express','watch']);

};