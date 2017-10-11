import { printOnFail, getJekyllData } from '../lib/helpers';
import * as matchers from '../lib/matchers';

expect.extend(matchers);

describe('Style guide', function() {
  beforeAll(() => {
    return getJekyllData().then(site => {
      this.site = site;
    });
  });

  test('avoid use of "<word> to announce" in posts', () => {
    const { posts } = this.site;
    posts.modified().forEach(post => {
      printOnFail(post.path, () => {
        expect(post.content).not.toMatchLint(/([a-z]+) to announce/gi);
      });
    });
  });
});
