const express = require('express');
const container = require('./container/container');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', container.coinsController.index);
app.get('/coins', container.coinsController.listCoins);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
