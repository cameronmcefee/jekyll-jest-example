# jekyll-jest-example

This is an example of how you can test your Jekyll blog with Jest. You may find this useful if you want to:

- Ensure specific frontmatter values are present in posts
- Ensure authors use em dashes (—) rather than double dashes (--)
- Ensure no blog post ever starts with “We are excited to announce”

The contents of this repo come from the boilerplate Jekyll site created via `jekyll add <site>`. The only notable initial change is that the templates have been moved to the `src` folder and `_config.yml` has been updated accordingly to ensure it builds from there.

This is a companion [to this tutorial](https://blog.sentry.io/keep-your-blog-consistent-with-jekyll-and-jest/), so you can find code for each step in the folders of this repo. If you would like to jump right to the complete code, [<kbd>jump to section 5</kbd>](https://github.com/cameronmcefee/jekyll-jest-example/tree/master/5-selectively-test-files)

| Step | Problem solved |
| --- | --- |
| 1 | [Get set up](https://github.com/cameronmcefee/jekyll-jest-example/tree/master/1-getting-started) |
| 2 | [Expose Jekyll data](https://github.com/cameronmcefee/jekyll-jest-example/tree/master/2-expose-jekyll-data) |
| 3 | [Report which posts fail](https://github.com/cameronmcefee/jekyll-jest-example/tree/master/3-report-which-posts-fail) |
| 4 | [Enforce a style guide](https://github.com/cameronmcefee/jekyll-jest-example/tree/master/4-enforce-a-style-guide) |
| 5 | [Selectively test files](https://github.com/cameronmcefee/jekyll-jest-example/tree/master/5-selectively-test-files)               |

## Getting started

This repo assumes you know what Jekyll is and already have Ruby, Node.js, and Jekyll installed.

```
$ cd <folder for desired step>
$ bundle install
$ npm install
$ bin/test
```

This will install all the dependencies you will need and run the tests.
