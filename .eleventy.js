module.exports = function(eleventyConfig) {
  // Pass-through copy for assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
