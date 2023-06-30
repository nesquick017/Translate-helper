#!/usr/bin/env node
/* eslint-disable import/extensions */
import { program } from 'commander';
import exchange from '../src/index.js';

program
  .version('1.0.0')
  .description('Text analysis tool that replaces stop words with new values')
  .arguments('<File> <configName>')
  .helpOption('-h, --help', 'output usage information')
  .action((File, configName) => exchange(File, configName))
  .parse(process.argv);
