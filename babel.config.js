module.exports = {
  presets: [
    "@babel/preset-react",
    [
      /**
       * Uses .browserslistrc to determine which plugins and polyfills
       * to use.
       * https://babeljs.io/docs/en/babel-preset-env
       */
      "@babel/preset-env",
      {
        // Uncomment to see what plugins preset-env thinks it should
        // include based on the .browserslist file.
        // debug: true,

        /**
         * Targets are now defined in .browserslistrc
         * You can check your browser queries with `npx browserslist`
         * https://babeljs.io/docs/en/babel-preset-env#browserslist-integration
         */

        /**
         * Adds specific imports for polyfills when they are
         * used in each file. We take advantage of the fact
         * that a bundler will load the same polyfill only once.
         * https://babeljs.io/docs/en/babel-preset-env#usebuiltins
         */
        useBuiltIns: "usage",

        /**
         * This must match the version of core-js in package.json
         * or babel will complain.
         */
        corejs: {
          version: "3.30",
        },
      },
    ],
  ],
  include: ["src"],
  exclude: [/\/node_modules\//],
};
