module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "views",
      output: "docs"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "html"]
  };
};
