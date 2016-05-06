/*globals module*/

module.exports = function (config) {

    'use strict';

    config.set({

        basePath: './',
        frameworks: ['jasmine', 'requirejs'],
        files: [
            'tests/karma-loader.js', {

                pattern: 'src/*.js',
                included: false
            }, {

                pattern: 'tests/*.spec.js',
                included: false
            }],

        // Start these browsers, currently available:
        browsers: ['PhantomJS'],

        plugins: [
            'karma-jasmine',
            'karma-requirejs',
            'karma-phantomjs-launcher',
            'karma-nyan-reporter'
        ],

        reporters: ['nyan']
    });
};
