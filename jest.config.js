// module.exports = {
//     "roots": [
//       "<rootDir>/src"
//     ],
//     "transform": {
//       "^.+\\.tsx?$": "ts-jest"
//     },
//   }

module.exports = {
  testEnvironment: "node",
  displayName: {
    name: "blockr-public-api",
    color: "magenta"
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: [
    "**/__tests__/**/*.test.+(ts|tsx)"
  ],
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/index.ts",
    "!src/main.ts",
    "!src/injection/**/*",
    "!src/__tests__/**/*",
    "!src/routers/**",
    "!src/app.ts",
    "!src/middleware/**",
  ],
  reporters: [
    "default",
    "jest-junit"
  ],
  coverageReporters: [
    "text",
    "lcov",
    "cobertura"
  ]
}