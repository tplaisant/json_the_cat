const needle = require('needle');
// ${process.argv[2]}
const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  needle.get(`${url}`, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      if (Object.keys(body).length === 0) {
        callback('No information found for that breed', null);
      } else {
        callback(null, body[0].description);
      }
    }
  });
};
module.exports = { fetchBreedDescription };