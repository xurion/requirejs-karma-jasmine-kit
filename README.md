# RequireJS Karma Jasmine setup

This project houses a basic RequireJS, Karma and Jasmine setup. Due to the asynchronous nature of RequireJS, getting started with unit testing can be tricky. This will aid you in getting started.

## Running tests

    grunt karma

## Structure

The **tests/karma-loader.js** file is used by **karma.conf.js** to preload test files and configures karma with a **window.__karma__.start** callback.

A **tests/simple.spec.js** test file simply runs a couple of basics to confirm the setup is working.

A **tests/NumberGetter.spec.js** test file asserts some basic instance functionality from **src/NumberGetter.js**.

## Reporter

The reporter used is the nyan cat reporter. Feel free to remove it from **karma.conf.js** to fall back to simple reporting. But why would anyone not want nyan..?
