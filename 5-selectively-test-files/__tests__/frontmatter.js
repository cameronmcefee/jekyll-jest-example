import { getJekyllData, printOnFail } from '../lib/helpers';

describe('Post frontmatter', function() {
  beforeAll(() => {
    return getJekyllData().then(site => {
      this.site = site;
    });
  });

  test('post urls must end with .html', () => {
    const { posts } = this.site;
    posts.modified().forEach(post => {
      printOnFail(post.path, () => {
        expect(post.url).toMatch(/.html$/i);
      });
    });
  });
});
