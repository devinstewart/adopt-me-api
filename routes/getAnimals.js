'use strict';

const route = {
    method: 'GET',
    path: '/animals',
    handler: async (request) => {
        const { prisma } = request;

        const animalsObject = await prisma.animals.findMany({ select: { name: true }, orderBy: { name: 'asc' } });
        const animals = animalsObject.map((animal) => animal.name);
        return animals;
    }
};

module.exports = route;
