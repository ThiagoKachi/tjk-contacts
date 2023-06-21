// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: [
    "<rootDir>/setup-tests.js"
  ],
  // collectCoverageFrom: [
  //   "<rootDir>/src/**/*.{js,ts,jsx,tsx}"
  // ]
};
