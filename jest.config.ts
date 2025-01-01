import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};

export default config;
