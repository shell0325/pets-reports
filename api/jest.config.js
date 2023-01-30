module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '(/__tests__/|(\\\\.|/)test/).+\\.test.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.ts'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  errorOnDeprecated: true,
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/$1',
  },
  setupFilesAfterEnv: [`${process.cwd()}/jest.setup.js`],
};
