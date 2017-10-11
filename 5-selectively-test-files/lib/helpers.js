import { readJSON } from 'fs-extra';
import _ from 'lodash';

export const getJekyllData = () => {
  return Promise.all([
    // Fetch site metadata produced by Jekyll so we can test against what Jekyll
    // is using to render.
    readJSON('_site/_jest.json')
  ]).then(([site_meta]) => {
    // Get initial data
    let site = site_meta;

    // Filter the post list to only include files that are different from master
    //
    // Returns an array
    site.posts.modified = filterModifiedFiles;

    return site;
  });
};

// Filter an array of jekyll page objects to include only those that are
// different from master.
//
// Returns an array
const filterModifiedFiles = function() {
  const gitPaths = process.env.CHANGED_FILES
    .split(/\s/)
    .map(path => path.replace('src/', ''));
  const modifiedFilePaths = _.intersection(
    this.map(file => file.path),
    _.compact(gitPaths)
  );
  const modifiedFiles = _.filter(this, file => {
    return modifiedFilePaths.includes(file.path) && !file.ignore_tests;
  });
  return modifiedFiles;
};

export const printOnFail = (message, fn) => {
  try {
    fn();
  } catch (e) {
    throw Error(`${message}\n\n${e.message}`);
  }
};
