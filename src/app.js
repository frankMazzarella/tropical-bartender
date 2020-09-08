const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

const router = require('./router');
const drinkList = require('./drinkList.json');
const SocketService = require('./services/Socket.service');

const port = 3000;
const app = express();
const httpServer = http.createServer(app);
SocketService.init(httpServer);

app.use(compression());
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index', { drinkList }));
app.get('/queue', (req, res) => res.render('pages/queue'));
app.use('/api/v1', router);
app.get('/healthcheck', (req, res) => res.json(process.uptime()));

httpServer.listen(port, () => console.log(`tropical-bartender is listening on port: ${port}`));
