const axios = require('axios');
// const fs = require('fs');
//https://www.target.com/p/hp-14-touchscreen-laptop-intel-celeron-4gb-ram-64gb-emmc-storage-windows-11/-/A-89812356?preselect=88283363#lnk=sametab';

const url = 'https://www.target.com/p/hp-14-touchscreen-laptop-intel-celeron-4gb-ram-64gb-emmc-storage-windows-11/-/A-89812356?preselect=88283363#lnk=sametab';

function getTextAfter(text, str) {
    const regex = new RegExp(`${text}(.*?),`);
    const match = regex.exec(str);
    return match ? match[1].trim() : null; // Extract the captured group and trim
  }

axios.get(url)
  .then(function (response) {
    // var stream = fs.createWriteStream("my_file.txt");
    // stream.once('open', function(fd) {
    //     stream.write(response.data);
    //     stream.end();
    // wellness_description
    //  });
      const price = getTextAfter('current_retail', response.data);
      const desc = getTextAfter('title', response.data);
      console.log(desc);
     
      console.log(price); // Output: $109.99
     
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

