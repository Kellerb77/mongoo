var axios= require("axios");
var cheerio= require("cheerio");

axios.get("https://www.npr.org/sections/news/").then(function(response) {

  // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);

    // Now, we grab every h2 within an article tag, and do the following:
    $("div.item-info").each(function(i, element) {
      // Save an empty result object
      var result = {};
console.log(element);
      // Add the text and href of every link, and save them as properties of the result object
    //   result.title = $(this)
    //     .children("a")
    //     .text();
    //   result.link = $(this)
    //     .children("a")
    //     .attr("href");

            // Now, we grab every h2 within an article tag, and do the following:
    // Send a message to the client
  });
});
