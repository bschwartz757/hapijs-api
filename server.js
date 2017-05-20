'use strict';

const Hapi = require('hapi');

// Create a Hapi server instance
const server = new Hapi.Server();
// Tell the server which port to listen on
server.connection({port: 3001, host: 'localhost'});
// Create a hello world route
server.route({
    method: 'GET',
    path: '/hello',
    handler: (request, reply) => {
        reply({message: 'Hello World!'});
    }
});
// Start the server and log out the URI
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});