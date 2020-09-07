const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const path = require('path');

const router = require('./router');
const drinkList = require('./drinkList.json');

const port = 3000;
const app = express();

app.use(compression());
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index', { drinkList }));
app.get('/queue', (req, res) => res.render('pages/queue'));
app.use('/api/v1', router);
app.get('/healthcheck', (req, res) => res.json(process.uptime()));
app.listen(port, () => console.log(`tropical-bartender is listening on port: ${port}`));
