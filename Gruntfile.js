module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            plugins: {
                src: [
                    'components/jquery/jquery.min.js',
                    'components/underscore/underscore-min.js',
                    'components/backbone/backbone-min.js',
                    'components/handlebars.js/dist/handlebars.js',
                    'components/moment/min/moment.min.js'
                ],
                dest: 'public/js/plugins.js'
            },
            css: {
                src: [
                    'components/normalize-css/normalize.css'
                ],
                dest: 'public/css/normalize.css'
            }
        },

        copy: {
          main: {
            files: [
                {
                    src: ['src/public/favicon.ico'], 
                    dest: 'public/favicon.ico', 
                    filter: 'isFile',
                    flatten: true
                } // includes files in path
            ]
          }
        },

        coffee: {
            cpublic: {
                files: {
                    'public/js/main.js': 'src/public/javascript/main.coffee'
                }
            },
            cserver: {
                files: {
                    'server.js': 'src/server/server.coffee'
                }
            }
        },

        sass: {
            dist: {
                files: {
                    'public/css/main.css': [
                        'src/public/sass/main.sass'
                    ]
                }
            }
        },

        jade: {
            compile: {
                options: {
                    pretty: true,
                    data: {
                        debug: false
                    }
                },
                files: {
                    "public/index.html": 
                        [
                            "src/public/jade/index.jade"
                        ]
                }
            }
        },

        watch: {
            htmls: {
                files: [
                    "src/public/jade/**/*.jade"
                ],
                tasks: ['jade']
            },
            scripts: {
                files: [
                    'src/**/*.coffee'
                ],
                tasks: ['coffee']
            },
            styles: {
                files: [
                    "src/public/sass/**/*.sass"
                ],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');

    grunt.registerTask('default', ['copy', 'concat', 'jade', 'coffee', 'sass']);
};