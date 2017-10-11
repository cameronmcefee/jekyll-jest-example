import { getJekyllData } from '../lib/helpers';

describe('Post frontmatter', function() {
  beforeAll(() => {
    return getJekyllData().then(site => {
      this.site = site;
    });
  });

  test('post urls must end with .html', () => {
    const { posts } = this.site;
    posts.forEach(post => {
      expect(post.url).toMatch(/.html$/i);
    });
  });
});
