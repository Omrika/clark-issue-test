module.exports = {
  "extends": "standard",
  "plugins": [
    "standard",
    "promise",
    "react"
  ],
  "env": {
    "browser": true,
    "node": true
  },
  "ecmaFeatures": {
    "jsx": true
  },
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  }
}