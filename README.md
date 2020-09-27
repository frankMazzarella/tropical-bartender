# tropical-bartender
Drink ordering system

## Installation and Startup
- Install the dependencies with `$ npm install`
- Start the server with `$ npm start`
  - The server can be started in watch mode with `$ npm run nodemon`

## Usage
- The server will be available within the network of the host machine
- The default port is `3000` but this can be configured in `/src/app.js`
- The ordering screen can be accessed at `http://localhost:3000`
- The bartender queue can be accessed at `http://localhost:3000/queue`
- Substitute `localhost` with the host machines local IP address to access from devices within the network
  - Use `ipconfig` (windows) or `ifconfig` (linux) to view the host machines local IP address
