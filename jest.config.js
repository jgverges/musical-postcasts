module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testMatch: [
    "<rootDir>/tests/**/*.test.(ts|tsx|js|jsx)",
    "<rootDir>/src/**/*.test.js",
    "<rootDir>/**/*.test.(ts|tsx|js|jsx)",
  ],
};
