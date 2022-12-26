'use strict';

const Hapi = require('@hapi/hapi');
const Joi = require('joi');
const prismaPlugin = require('./plugins/prisma.js');

const server = Hapi.Server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    routes: {
        cors: {
            origin: ['http://localhost:5173', 'http://127.0.0.1:5173']
        }
    }
});

server.validator(Joi);

server.route(require('./routes'));

const init = async () => {
    await server.register({
        plugin: prismaPlugin
    });
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
