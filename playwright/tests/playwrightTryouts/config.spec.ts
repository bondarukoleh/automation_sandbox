import {expect, test} from '@playwright/test';
import * as fs from "fs";

test.describe('config @tryOuts', async () => {
  test.skip(_ => true);
  test('testinfo', async ({baseURL}, testInfo) => {
    console.log(`Base URL from config's webServer ${baseURL}`)
    /* Will write config to test-results folder */
    fs.writeFileSync(testInfo.outputPath('logs.txt'), `${JSON.stringify(testInfo.config)}`, 'utf8');
    //@ts-ignore
    expect(1).customInRangeMatcher(0, 3)
  });
})
