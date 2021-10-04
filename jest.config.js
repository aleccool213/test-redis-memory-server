module.exports = {
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.json",
      isolatedModules: true,
      diagnostics: false,
    },
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  roots: ["<rootDir>/src"],
  testPathIgnorePatterns: ["/node_modules/", "/lib/"],
  testMatch: ["**/*.test.(ts|js)"],
  globalSetup: "<rootDir>/jest.global-setup.js",
};
