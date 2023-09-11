const fs = require('fs');

function extractNamesFromJSONFile(filename) {
  try {
    // Read the JSON file
    const jsonData = fs.readFileSync(filename, 'utf8');
    
    // Parse the JSON data
    const data = JSON.parse(jsonData);

    // Extract names into an array
    const namesArray = data.data.map(item => item.first_name);

    return namesArray;
  } catch (error) {
    console.error('Error reading or processing the JSON file:', error);
    return [];
  }
}

// Example usage:
const jsonFileName = 'response_1694287579730.json';
const names = extractNamesFromJSONFile(jsonFileName);

console.log('Names extracted from the JSON file:', names);
