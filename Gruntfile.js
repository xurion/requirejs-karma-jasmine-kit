/*globals module*/

module.exports = function (grunt) {

    'use strict';

    grunt.initConfig({

        pkg: '<json:package.json>',

        karma: {
            karma: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
};
