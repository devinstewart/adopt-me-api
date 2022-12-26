'use strict';

const route = {
    method: 'GET',
    path: '/states',
    handler: async (request) => {
        const { prisma } = request;

        const statesObj = await prisma.states.findMany({ select: { name: true }, orderBy: { name: 'asc' } });
        const states = statesObj.map((state) => state.name);
        return states;
    }
};

module.exports = route;
