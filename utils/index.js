export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.range.split(' - ')[0]) - 
         new Date(a.frontmatter.range.split(' - ')[0]);
};

export const toPascalCase = sentence => sentence.replace(/\b\w/g, match => match.toUpperCase());
