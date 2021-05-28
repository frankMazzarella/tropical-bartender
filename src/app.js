const express = require('express');
const compression = require('compression');
const path = require('path');
const http = require('http');
const fs = require('fs');
const os = require('os');
const getPort = require('get-port');

const fileService = require('./services/File.service');
const SocketService = require('./services/Socket.service');
const DrinkService = require('./services/Drink.service');

const vueAppDirectory = path.join(__dirname, '..', 'public');
const packageJSON = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json')));
const app = express();
const httpServer = http.createServer(app);
DrinkService.updateDrinkList(fileService.readDrinkList());
SocketService.init(httpServer);

app.use(compression());
app.get('/healthcheck', (req, res) => res.json({ uptime: process.uptime(), version: packageJSON.version }));
app.use('/', express.static(vueAppDirectory));
app.use('*', express.static(vueAppDirectory));

(async () => {
  const port = await getPort({ port: 3000 });
  httpServer.listen(port, () => {
    console.log(`${packageJSON.name} v${packageJSON.version} has started on port ${port} [host: ${os.hostname}]`);
  });
})();
