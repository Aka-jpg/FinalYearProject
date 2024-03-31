const axios = require('axios');
const cheerio = require('cheerio');

const walmartUrl = 'https://www.walmart.com/';

async function scrapeWalmart() {
  try {
    // Make a GET request to Walmart's website
    const response = await axios.get(walmartUrl);

    // Load HTML content into Cheerio
    const $ = cheerio.load(response.data);

    // Example: Scrape product title
    const productTitle = $('.product-title').text();
    console.log('Product Title:', productTitle);

    // Example: Scrape product price
    const productPrice = $('.product-price').text();
    console.log('Product Price:', productPrice);

    // Add more selectors and logic as needed for other product information

  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Run the scraping function
scrapeWalmart();
