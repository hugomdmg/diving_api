import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  collectCoverage: true,
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  verbose: true,
  coverageReporters: ['text-summary', 'lcov', 'cobertura'],
};

export default config;
