const needle = require('needle');
let url = `https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`;

needle.get(`${url}`, (error, response, body) => {
  if (error) console.log('error:', error); // Print the error if one occurred
  if (Object.keys(body).length === 0) {
    console.log('No information found for that breed');    
  } else {
    console.log(body);
  }
});