'use strict';

const Joi = require('joi');

const route = {
    method: 'GET',
    path: '/pets/{id}',
    options: {
        validate: {
            params: {
                id: Joi.number().integer()
            }
        }
    },
    handler: async (request) => {
        const { prisma } = request;
        const { id } = request.params;

        const petObject = await prisma.pets.findUnique({
            select: {
                id: true,
                name: true,
                description: true,
                breed: {
                    select: {
                        name: true,
                        animal: {
                            select: {
                                name: true
                            }
                        }
                    }
                },
                city: {
                    select: {
                        name: true,
                        state: {
                            select: {
                                name: true
                            }
                        }
                    }
                },
                images: {
                    select: {
                        url: true
                    }
                }
            },
            where: {
                id: id
            }
        });

        const pet = {
            id: petObject.id,
            name: petObject.name,
            breed: petObject.breed.name,
            animal: petObject.breed.animal.name,
            city: petObject.city.name,
            state: petObject.city.state.name,
            description: petObject.description,
            images: petObject.images.map((image) => image.url)
        };

        return pet;
    }
};

module.exports = route;
