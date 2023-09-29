export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};

export const toPascalCase = sentence => sentence.replace(/\b\w/g, match => match.toUpperCase());
