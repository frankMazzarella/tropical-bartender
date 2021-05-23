# tropical-bartender-server
Drink ordering system backend services

## Installation and Startup
- Install the dependencies with `$ npm install`
- Start the server with `$ npm start`
  - The server can be started in watch mode with `$ npm run nodemon`
- This package relies on `tropical-bartender-vue` to run

## Vue Frontend
- Make sure to have `tropical-bartender-server` and `tropical-bartender-vue` projects in the same directory
- Follow `deploy` instructions in `tropical-bartender-vue` to have the frontend output placed in the `public` directory of this project
- The `public` directory is used by this project to serve the frontend
- Make sure to have the lastest frontend assets transferred into this project before attempting to compile the executable

## Building the executable
- The project can be ran using `$ npm start` or you can build a single executable that packages node and all of the
required dependencies
- Run `$ npm run build` to have a Windows, Mac, and Linux executable placed in the `dist` directory

## Usage
- The server will be available within the network of the host machine
- The default port is `3000` but this can be configured in `/src/app.js`
- The ordering screen can be accessed at `http://localhost:3000`
- The bartender queue can be accessed at `http://localhost:3000/queue`
- Substitute `localhost` with the host machines local IP address to access from devices within the network
  - Use `ipconfig` (windows) or `ifconfig` (linux) to view the host machines local IP address
