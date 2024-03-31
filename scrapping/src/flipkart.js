const axios = require("axios");
const { JSDOM } = require("jsdom");

const getProductUrl = (product_id) =>
  `
  https://www.flipkart.com/hp-chromebook-14a-intel-celeron-dual-core-n4020-4-gb-64-gb-emmc-storage-chrome-os-14a-na0003tu/p/itm3686424b99d44?pid=${product_id}&lid=LSTCOMFTYBZG8ZGJFHFR2KHJ7&marketplace=FLIPKART&q=HP+14+Laptop%2C+Intel+Celeron+N4020&store=6bo%2Fb5g&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=60b49989-3e3a-4949-8bb3-ee0357966178.COMFTYBZG8ZGJFHF.SEARCH&ppt=sp&ppn=sp&ssid=koovip3tqo0000001709282621552&qH=58f3bb9c73cf8aab`;

async function getPrices(product_id) {
  const productUrl = getProductUrl(product_id);
  const { data } = await axios.get(productUrl, {
    headers: {
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
      Host: "www.flipkart.com",
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      Pragma: "no-cache",
      TE: "Trailers",
      "Upgrade-Insecure-Requests": 1,
    },
  });
  console.log(data)
  const dom = new JSDOM(data);
  const $ = (selector) => dom.window.document.querySelector(selector);
  const $$ = (selector) => dom.window.document.querySelectorAll(selector);

  const price = dom.window.document.querySelector(".a-offscreen").textContent;

  // Update the selector
  const pinnedShippedFrom = $("#aod-offer-shipsFrom").textContent.trim();



  const result = {
    pinnedElement: $("#aod-pinned-offer").textContent.trim(),
    price,
    pinnedShippedFrom,
   
  };

  console.log(result);
}

getPrices("COMFTYBZG8ZGJFHF");
