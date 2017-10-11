export const toMatchLint = function(received, argument) {
  // Make a regex that matches our lint regexp, plus the rest of the paragraph
  // in which it exists.
  const lineMatch = new RegExp(`(^|\\n).*?(${argument.source}).*?(\\n|$)`);
  const match = lineMatch.exec(received);
  const pass = !!match;

  const message = pass
    ? // this happens when expect(input).not.toMatchLint fails
      () => {
        const line = match[0];
        const matchedString = argument.exec(line)[0];
        const highlightedMatch = this.utils
          // Use Jest's built in highlight util to color the string.
          .printReceived(`[${matchedString}]`)
          // Replace the quotes that `printReceived` adds
          .replace(/"/g, '');

        return line.replace(argument, highlightedMatch);
      }
    : // this happens when expect(input).toMatchLint fails.
      () => `expected post to match ${argument}`;

  return { actual: received, message, pass };
};
