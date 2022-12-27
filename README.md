# Adopt Me! Api
API Server for my implementation of [Adopt Me!](https://github.com/devinstewart/adopt-me) App.  From [Brian Holt's](https://frontendmasters.com/teachers/brian-holt/) course on [React v18](https://frontendmasters.com/courses/complete-react-v8/).

I also heard some folks talking about [Prisma](https://www.prisma.io/) so I decided to give it a try. The server is built with [hapi](https://hapi.dev/), my favorite Node.js framework.

## Installation

After cloning the repo, you will need to create a local sqlite database.

First, install all the dependencies:
```bash
npm install
```

Then, create the database:

```bash
npm run db:create
```

Finally, start the server:
```bash
npm run dev
```
The server will be running on port 3000 via [nodemon](https://nodemon.io/).

## Thoughts on Prisma
**What I like:**
- Migrations are easy to create and run
- Seeding is easy to do
- Was able to get hooked up to hapi quickly, would be easy to hook up to other frameworks as well
- Typescript and Javascript support
- Good documentation

**What I don't like:**
- Doesn't do JOINs, so a query with 3 tables will produce 3 queries to the database
- Creates nested objects for relationships, had to use `Array.map` or create a new `Object` to flatten the data after it was returned
