module.exports = {
  'env': {
        'browser': true,
        'meteor': true,
        'node': true,
        'es6': true
  },
  "parser": "babel-eslint",
  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      },
    },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
  ],
  "plugins": [
    "react",
    "react-native"
  ],
  'rules': {
    'no-console': 1,

    'react-native/no-inline-styles': 0,
  },
}
