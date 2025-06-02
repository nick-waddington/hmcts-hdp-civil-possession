module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "views",   // where your Nunjucks files live
      output: "docs"    // where GitHub Pages will serve from
    },
    templateFormats: ["njk", "html"],
    htmlTemplateEngine: "njk"
  };
};
