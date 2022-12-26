# Adopt Me! Api
API Server for my implementation of Adopt Me! App.  From [Brian Holt's](https://frontendmasters.com/teachers/brian-holt/) course on [React v18](https://frontendmasters.com/courses/intermediate-react-v5/).

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
