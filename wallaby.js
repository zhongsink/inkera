
module.exports = (wallaby) => {
  return {
    files: [
      { pattern: 'app/**/*.jsx', load: true },
      { pattern: 'app/**/__tests__/*.spec.js', ignore: true },
      { pattern: 'app/**/*.js', load: true },
      { pattern: 'app/**/*.less', ignore: true },
      { pattern: 'jest.config.js', load: true },
      { pattern: 'config/*.js', ignore: true },
    ],
    tests: [
      'app/**/__tests__/*.spec.js',
    ],
    env: {
      type: 'node',
      runner: 'node',
    },
    testFramework: 'jest',

    compilers: {
      '**/*.js': wallaby.compilers.babel({ babelrc: true }),
      '**/*.jsx': wallaby.compilers.babel({ babelrc: true }),
    },

    setup: (wallaby) => {
      wallaby.testFramework.configure(require('./jest.config.js'));
    },
  };
};
