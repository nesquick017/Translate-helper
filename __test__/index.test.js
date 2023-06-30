/* eslint-disable import/no-extraneous-dependencies */
import { test, expect } from '@jest/globals';

const testString = 'im jest and im working';

test('jest should work', () => {
  expect(testString).toEqual('im jest and im working');
});
