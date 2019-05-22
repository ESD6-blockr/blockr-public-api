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
    "!src/app.ts",
    "!src/middleware/**/*",
    "!src/routers/**/*",
    "!src/injection/**/*",
    "!src/__tests__/**/*",
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