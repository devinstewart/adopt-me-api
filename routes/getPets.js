'use strict';

const Joi = require('joi');

const route = {
    method: 'GET',
    path: '/pets',
    options: {
        validate: {
            query: {
                animal: Joi.string().allow(''),
                breed: Joi.string().allow(''),
                city: Joi.string().allow(''),
                state: Joi.string().allow('')
            }
        }
    },
    handler: async (request) => {
        const { prisma } = request;
        const { animal, breed, city, state } = request.query;

        const basePrismaModel = {
            select: {
                id: true,
                name: true,
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
            where: {},
            take: 10
        };

        if (breed) {
            basePrismaModel.where.breed = {
                name: { equals: breed }
            };
        }

        if (animal && !breed) {
            basePrismaModel.where.breed = {
                animal: { name: { equals: animal } }
            };
        }

        if (city) {
            basePrismaModel.where.city = {
                name: { contains: city }
            };
        }

        if (state && city) {
            basePrismaModel.where.city = {
                name: { contains: city },
                state: { name: { equals: state } }
            };
        }

        if (state && !city) {
            basePrismaModel.where.city = {
                state: { name: { equals: state } }
            };
        }

        const petsObject = await prisma.pets.findMany(basePrismaModel);

        const pets = petsObject.map((pet) => {
            const { breed, city, images } = pet;
            const { animal } = breed;
            const { state } = city;
            return {
                id: pet.id,
                name: pet.name,
                breed: breed.name,
                animal: animal.name,
                city: city.name,
                state: state.name,
                images: images.map((image) => image.url)
            };
        });
        return pets;
    }
};

module.exports = route;
