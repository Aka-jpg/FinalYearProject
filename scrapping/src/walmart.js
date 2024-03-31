const axios = require('axios');
const cheerio = require('cheerio');

const productURL = 'https://www.walmart.com/ip/HP-Stream-14-Laptop-Intel-Celeron-N4020-Processor-4GB-RAM-64GB-eMMC-Pink-Windows-11-S-mode-with-Office-365-1-yr-14-cf2112wm/443153637?athbdg=L1102&from=/search';

axios.get(productURL)
  .then(response => {
    const $ = cheerio.load(response.data);

    // Extract product details
    const productName = $('h1 span').text().trim();
    const productPrice = $('span.price span.visuallyhidden').text().trim();

    console.log('Product Name:', productName);
    console.log('Product Price:', productPrice);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


















// const axios = require('axios');
// const cheerio = require('cheerio');

// const walmartUrl = 'https://www.walmart.com/ip/HP-Stream-14-HD-Laptop-Intel-Celeron-N4020-Processor-4GB-RAM-64GB-eMMC-Pink-Windows-11-S-Mode-Mazepoly-Accessories/2076502236?from=/search';

// async function scrapeWalmartProductPrice() {
//   try {
//     // Set custom headers to mimic a browser request
//     const headers = {
//       'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
//       'Host':'www.walmart.com',
//       'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
     
//     };

//     // Make the request without the maxHeaderSize option
//     const response = await axios.get(walmartUrl, { headers });
//     const html = response.data;
// console.log(html)
//     // Use Cheerio to load the HTML content
//     const $ = cheerio.load(html);

//     // Extract product price
//     const productPrice = $('span[itemprop="price"][aria-hidden="false"]').text().trim();

//     // Print the result
//     console.log('Product Price:', productPrice);

//   } catch (error) {
//     console.error('Error fetching or parsing the Walmart page:', error.message);
//   }
// }

// Run the scraping function
// scrapeWalmartProductPrice();


