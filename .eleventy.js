module.exports = function(eleventyConfig) {
  // Pass-through copy for assets
  eleventyConfig.addPassthroughCopy("src/assets");

  const isProduction = process.env.ELEVENTY_ENV === 'production';

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    pathPrefix: isProduction ? "/cdif4eosc-www/" : "/"
  };
};
