module.exports = {
  "extends": ["airbnb", "plugin:node/recommended", "prettier"],
  "env": {
    "es6": true,
    "node": true
  },
  "plugins": ["prettier"],
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "ecmaVersion": 8,
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module"
  },
  "rules": {
    "prettier/prettier": "error",
    "no-unused-vars": "warn",
    "no-console": "warn"
  }
};
