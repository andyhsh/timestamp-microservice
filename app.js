const express = require('express');
const convertTimestampToJson = require('./api/timestamp');

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/:timestamp', (req, res) => {
  const timestamp = req.params.timestamp;
  res.json(convertTimestampToJson(timestamp));
});

app.get('/', (req, res) => {
  const url = req.protocol + '://' + req.headers.host;
  res.render('index', { url });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
