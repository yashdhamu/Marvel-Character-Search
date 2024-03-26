const express = require('express');
const axios = require('axios');
const md5 = require('md5');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
const publicKey = 'c87bf1a2c9a9f8217392fe5ac7c739f5';
const privateKey = 'a023c80c34e524403587c0c956e4a3f19a0e432d';

app.get('/', async (req, res) => {
  try {
    const timestamp = Date.now().toString();
    const hash = md5(timestamp + privateKey + publicKey);
    const limit = 5; // Number of characters per page
    const offset = parseInt(req.query.offset) || 0;
    const searchQuery = req.query.q || ''; // Get search query from request

    const params = {
      apikey: publicKey,
      ts: timestamp,
      hash: hash,
      limit: limit,
      offset: offset
    };

    // If search query is provided, add it to parameters
    if (searchQuery) {
      params.nameStartsWith = searchQuery;
    }

    // Make request to Marvel API
    const response = await axios.get('https://gateway.marvel.com/v1/public/characters', {
      params: params
    });

    // Extract characters and total character count from API response
    const characters = response.data.data.results;
    const totalCharacters = response.data.data.total;

    // Render index.ejs with character data
    // Render index.ejs with character data and search query
    res.render('index', { characters, totalCharacters, offset, searchQuery: req.query.q });
  } catch (error) {
    console.error('Error fetching Marvel characters:', error);
    res.status(500).send('Error fetching Marvel characters');
  }
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = {
  createServer: (port) => {
    return app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  }
};