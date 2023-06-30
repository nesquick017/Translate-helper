/* eslint-disable import/no-extraneous-dependencies */
import { test, expect } from '@jest/globals';
import { testFunction, getName } from '../bin/exchanger';

const testString = 'im jest and im working';

test('jest should work', () => {
  expect(testString).toEqual('im jest and im working');
  expect(testFunction()).toEqual(5);
  expect(getName()).toEqual('Nikita');
});
