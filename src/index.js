/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import _ from 'lodash';

const getNewFilePath = (fileName) => path.join(process.cwd(), `${fileName}.txt`);
const getCurrentFilePath = (fileName) => path.join(process.cwd(), `${fileName}`);

export default (file, configName) => {
  const fileData = fs.readFileSync(getCurrentFilePath(file), 'utf-8');
  const config = yaml.load(fs.readFileSync(configName), 'utf-8');
  const newFileData = fileData
    .split(' ')
    .map((word) => {
      if (_.has(config, word)) return config[word];
      return word;
    })
    .join(' ');
  try {
    fs.writeFileSync(getNewFilePath('Exchanger_result'), newFileData);
    return true;
  } catch (error) {
    if (error) {
      return false;
    }
  }
};
