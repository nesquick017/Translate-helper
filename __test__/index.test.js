/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import { test, expect } from '@jest/globals';
import exchange from '../src/index.js';

test('function finished successfully', () => {
  const pathToConfig = path.join(process.cwd(), '__fixtures__/stop-words.yaml');
  expect(exchange('__fixtures__/file.txt', pathToConfig)).toEqual(true);
});
