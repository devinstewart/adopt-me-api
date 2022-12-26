'use strict';

const Joi = require('joi');

const route = {
    method: 'GET',
    path: '/breeds',
    options: {
        validate: {
            query: {
                animal: Joi.string().allow('').required()
            }
        }
    },
    handler: async (request) => {
        const { prisma } = request;
        const { animal } = request.query;

        const breedsObject = await prisma.breeds.findMany({
            select: { name: true },
            where: { animal: { name: { equals: animal } } },
            orderBy: { name: 'asc' }
        });
        const breeds = breedsObject.map((breed) => breed.name);
        return breeds;
    }
};

module.exports = route;
