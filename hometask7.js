const fetch = require('node-fetch');
const fs = require('fs');

const apiUrl = 'https://reqres.in/api/users?page=1&per_page=5';
const jsonFileName = 'response.json';

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Save the JSON response to a file
    fs.writeFileSync(jsonFileName, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Data saved to ${jsonFileName}`);
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });