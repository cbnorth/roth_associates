module.exports = function(grunt) {

    var fs = require("fs");

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-wintersmith');

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    livereload: true,
                    port: 8080,
                    base: {
                        path: "../",
                        options: {
                            extensions: ['html']
                        }
                    }
                }
            }
        },
        wintersmith: {
            build: {}
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    noCache: true
                  },
                files: {
                    'contents/css/styles.css' : 'contents/sass/styles.scss'
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'contents/scripts/script.min.js': ['contents/scripts/script.js']
                },
                sourceMap: true
            }
        },
        sync: {
            copy_resources: {
                files: [
                    { cwd: 'contents', src: 'css/**', dest: '../' },
                    { cwd: 'contents', src: 'scripts/script.min.js', dest: '../' }
                ]
            }
        },
        watch: {
            options: {
                livereload: true
            },
            jade: {
                files: '**/*.jade',
                tasks: ['wintersmith']
            },
            scss: {
                files: '**/*.scss',
                tasks: ['sass']
            },
            css: {
                files: '**/*.css',
                tasks: ['sync']
            },
            dev: {
                files: ['contents/scripts/*.js', '!contents/scripts/script.min.js'],
                tasks: ["browserify"]
            },
            js: {
                files: 'contents/scripts/script.js',
                tasks: ['uglify']
            },
            min: {
                files: 'contents/scripts/script.min.js',
                tasks: ['sync']
            }
        }
    });

    grunt.registerTask("default", ["connect", "wintersmith", "sass", "uglify", "sync", "watch"]);

}