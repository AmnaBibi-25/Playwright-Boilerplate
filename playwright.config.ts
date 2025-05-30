import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { getEnvVar } from './configs/envHelper';

const ENV = process.env.ENV || 'dev';
dotenv.config({
  path: path.resolve(__dirname, 'configs', `.env.${ENV}`)
})

export const envConfig = {
  baseURL: getEnvVar('BASE_URL'),
  loginPath: getEnvVar('LOGIN_PATH'),
  homePath: getEnvVar('HOME_PATH'),

  loginURL: () => `${getEnvVar('BASE_URL')}${getEnvVar('LOGIN_PATH')}`,
  homeURL: () => `${getEnvVar('BASE_URL')}${getEnvVar('HOME_PATH')}`
}

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: envConfig.baseURL,
    trace: 'off',
    screenshot: 'only-on-failure'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],

});
