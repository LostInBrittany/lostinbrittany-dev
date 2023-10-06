const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { JSDOM } = require('jsdom');

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebc, {
		// Glob to find no-import global components
		// (The default changed from `false` in Eleventy WebC v0.7.0)
		components: "_components/**/*.webc",    
  });

  
  // Have Eleventy watch the following additional files for live browsersync
  eleventyConfig.addWatchTarget('./**/*.css');
  eleventyConfig.addWatchTarget('./**/*.js');
  eleventyConfig.addWatchTarget('./**/*.md');
  eleventyConfig.addWatchTarget('./**/*.jpg');
  eleventyConfig.addWatchTarget('./**/*.png');
  eleventyConfig.addWatchTarget('./**/*.webc');


  eleventyConfig.addJavaScriptFunction("excerpt", function(htmlText, url) { 

    // Create a DOM-like environment with jsdom
    const dom = new JSDOM(htmlText);

    // Access the document object from the DOM
    const document = dom.window.document;

    // Select all the paragraph and header elements within the document
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');

    // Extract the content of the first two paragraphs and headers
    let result = '';
    let paragraphCount = 0;
    for (const element of elements) {
      if (element.tagName.toLowerCase() === 'p' && paragraphCount < 2) {
        result += element.textContent + '\n';
        paragraphCount++;
      } else if (paragraphCount >= 2) {
        // We've already found the first two paragraphs, so break the loop
        break;
      } else {
        // Include headers that appear before the end of the first two paragraphs
        result += element.outerHTML + '\n';
      }
    }
    result += `<p><a href="${url}">Read more...</a></p>`;

    return result.trim(); // Remove leading/trailing whitespace

  });

  
  //Copy static assets to the output directory
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('img');

  return {
    // These are all optional:
		dir: {
			input: "content",          // default: "."
			includes: "../_includes",  // default: "_includes"
			data: "../_data",          // default: "_data"
			output: "_site"
		},
  }
};