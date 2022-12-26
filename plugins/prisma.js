'use strict';

const { PrismaClient } = require('@prisma/client');

const prismaPlugin = {
    name: 'prisma',
    version: '1.0.0',
    register: async (server) => {
        const prisma = new PrismaClient();
        server.decorate('request', 'prisma', prisma);
        server.events.on('stop', () => prisma.$disconnect());
    }
};

module.exports = prismaPlugin;
