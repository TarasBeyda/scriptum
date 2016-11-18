module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            }
            , dist: {
                src: ['css/*.css', '!ie.css', '!main.css', '!*.min.css']
                , dest: 'css/main.css'
            }
        }
        , cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['main.css'],
                    dest: 'css/',
                    ext: '.min.css'
                }]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    grunt.registerTask('default', ['concat','cssmin']);
};