const axios = require("axios");
const { JSDOM } = require("jsdom");

const getProductUrl = (product_id) =>
  `https://www.amazon.com/gp/product/ajax/?asin=${product_id}&pc=sp&sprefix=dell%252Bprecision%252B5530%252B15.6%25252Caps%25252C334&crid=37ORKJ1SNBBGI&keywords=Dell%252BPrecision%252B5530%252B15.6&dib_tag=se&dib=eyJ2IjoiMSJ9.NWuwbzDIMybFUJsHfnn3gXzrIQdyxtrqA0SZRXd3kPUPYhLFEiSVcWMdImtT7wGlCVIwSknZAsiUttEgT16hGcysdjWi4hrEoPLi07HVZlxa0BfvNjtnzpXd-wTaqenGwcQ10Rohao96phBFr-L--AWWlHfWLJoRqQVGKoImJPvsHvxlomPzEkoJFPYtDUlmo7eNPZnnmfSdsJrmdUGeQcKcVauY4KQyaLZck9RxrmU.U2rXyIas759agOlpkLD8vJb9rpUQqsBjhs2KzecyfJM&sr=8-3&rrid=56N8ZJN4GKXXWFTF400Z&experienceId=aodAjaxMain`;

async function getPrices(product_id) {
  const productUrl = getProductUrl(product_id);
  const { data } = await axios.get(productUrl, {
    headers: {
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
      Host: "www.amazon.com",
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      Pragma: "no-cache",
      TE: "Trailers",
      "Upgrade-Insecure-Requests": 1,
    },
  });
  const dom = new JSDOM(data);
  const $ = (selector) => dom.window.document.querySelector(selector);
  const $$ = (selector) => dom.window.document.querySelectorAll(selector);
  const image = $("#pinned-image-id img").getAttribute("src");
  const price = dom.window.document.querySelector(".a-offscreen").textContent;

  // Update the selector
  const pinnedShippedFrom = $("#aod-offer-shipsFrom").textContent.trim();



  const result = {
    pinnedElement: $("#aod-asin-title-text").textContent.trim(),
    price,
    pinnedShippedFrom,
   image
  };
  // console.log(result.pinnedElement);
  // console.log(price);
  // console.log(pinnedShippedFrom);
  module.exports=result;
  console.log(result);
}

getPrices("B07MG73XNG");
