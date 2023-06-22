// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: [
    "<rootDir>/setup-tests.js"
  ],
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
  }
};
