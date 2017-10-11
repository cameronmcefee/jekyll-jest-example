import { readJSON } from 'fs-extra';

export const getJekyllData = () => {
  return Promise.all([
    // Fetch site metadata produced by Jekyll so we can test against what Jekyll
    // is using to render.
    readJSON('_site/_jest.json')
  ]).then(([site_meta]) => {
    // Get initial data
    let site = site_meta;

    return site;
  });
};
