const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const fs = require('fs');

const drinkList = require('./drinkList.json');
const SocketService = require('./services/Socket.service');

const port = 3000;
// TODO: test file system functionality in windows 10
const packageJson = JSON.parse(fs.readFileSync('package.json').toString());
const app = express();
const httpServer = http.createServer(app);
SocketService.init(httpServer);

app.use(compression());
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index', { drinkList }));
app.get('/queue', (req, res) => res.render('pages/queue'));
app.get('/healthcheck', (req, res) => res.json({ uptime: process.uptime(), version: packageJson.version }));

httpServer.listen(port, () => {
  console.log(`${packageJson.name} v${packageJson.version} is running on port: ${port}`)
});
