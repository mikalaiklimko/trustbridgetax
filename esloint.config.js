const js = require("@eslint/js");
module.exports = [
  {
    ignores: [
      "eslint.config.js",
      "node_modules/**"
    ]
  },
  
  js.configs.recommended,
  {
    files: ["server.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: {
        console: "readonly",
        process: "readonly",
        require: "readonly",
        module: "readonly",
        __dirname: "readonly"
      }
    }
  },
  {
    files: ["public/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        document: "readonly",
        window: "readonly"
      }
    }
  }
];
