const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const { JSDOM } = require("jsdom");
const getProductUrl = () =>
  `
  https://www.daraz.com.np/products/hp-14z-laptop-ryzen-5-8gb-ram-256gb-ssd-14-i128240342-s1035387296.html?spm=a2a0e.searchlist.sku.2.348858e6PsqcMQ&search=1
  `;
async function getPrices(product_id) {
  const dataLayer = [];
  const productUrl = getProductUrl(product_id);
  const { data } = await axios.get(productUrl);
  if (data) {
    const dom = new JSDOM(data);
    const document = dom.window.document;

    const scriptElement = document.querySelector(
      'script[type="text/javascript"]'
    );
    const scriptContent = scriptElement.textContent;

    const matches = scriptContent.match(/var pdpTrackingData = (.*?);/);

    if (matches && matches.length > 1) {
      const pdpTrackingData = matches[1];
      const objPdp = JSON.parse(pdpTrackingData);
      //   console.log(typeof objPdp);
      //   console.log(objPdp.pdt_category);
      const stringdata = pdpTrackingData.toString();
      console.log(stringdata);
      const stringArray0 = stringdata.split(':');
console.log(stringArray0);

const stringArray = stringdata.split('Rs.')[1];
console.log(stringArray.split(')')[0]);
      console.log("pdpTrackingData not found");
    }
    const filePath = "x.txt";
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
        return;
      }
      console.log("Data has been written to", filePath);
    });
  }
  const dom = new JSDOM(data);
  //   console.log(
  //     dom.window.document.querySelector(
  //       ".pdp-price .pdp-price_type_normal .pdp-price_color_orange .pdp-price_size_xl"
  //     )
  //   );
}

getPrices();