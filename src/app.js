const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');

const PORT = 3000;

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.get('/healthcheck', (req, res) => res.json(process.uptime()));
app.listen(PORT, () => console.log(`tropical-bartender is listening on port: ${PORT}`));
