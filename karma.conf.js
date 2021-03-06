// Karma configuration
// Generated on Wed Aug 29 2018 10:24:16 GMT-0500 (-05)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    
    webpack: require('./webpack.config.test'),

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['polyfill', 'mocha', 'chai', 'sinon'],

    polyfill: ['Promise', 'Map', 'WeakMap', 'Set', 'Object.assign', 'Array.from', 'Array.prototype.fill'],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/zone.js/dist/zone.js',        
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/mocha-patch.js',
      './src/**/*.spec.ts'
    ],

    // list of files / patterns to exclude
    exclude: [
      './node_modules',
      './src/dist'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './src/**/*.spec.ts': ['webpack']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // 
    // Available options:
    //  'Chrome'
    //  'Firefox' 
    //  'Safari' 
    //  'IE'
    //  'PhantomJS'
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
    
  })
}
