# Prisma + tRPC + Next.js

## Features

- ⚡ Full-stack React with Next.js
- ⚡ Database with Prisma
- ⚡ Authentication with JWT
- 🎨 ESLint + Prettier
- 💚 Deployment with Vercel
- 🔐 Validates your env vars on build and start
- Mobile responsive

This project is a simple web application that allows users to view a list of restaurants, mark a restaurant as a favorite. User is required to login into application first. Navigate to /login path to login. The default credentials to access the application:

## Database Diagram
![Example Image](https://drive.google.com/uc?id=1JqajWR-HKDL-hDeIAJ8A7Rly5runebQF)

## Default user
```
  username: admin
  password: 123
```

## Setup & start

- Copy environment variables from .env.example file to .env file
```bash
  cd nextjs-trpc
  cp .env.example .env
```
- Run commands to install dependencies, migrate database, seeding and start project.

```bash
npm install
npm run dev
```
The project will be started in http://localhost:3000

### Requirements

- Node >= 18.0.0
- Postgres15

## Development

### Start project

```bash
npm run start:dev
```

### Commands

```bash
npm run build      # runs `prisma generate` + `prisma migrate` + `next build`
npm run db-reset   # resets local db
npm run dev        # starts next.js
npm run dx         # starts postgres db + runs migrations + seeds + starts next.js
```

## Deployment

### Using Vecel
- Install Vercel CLI
```bash
npm i -g vercel
```

- Connect to Vercel project
```bash
vercel
```

- Deploy to Vercel
```bash
vercel deploy      # runs a test deployment with output is a preview environment
vercel --prod      # deploy to production
```

## Files of note

<table>
  <thead>
    <tr>
      <th>Path</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="./prisma/schema.prisma"><code>./prisma/schema.prisma</code></a></td>
      <td>Prisma schema</td>
    </tr>
    <tr>
      <td><a href="./src/pages/"><code>./src/pages/</code></a></td>
      <td>Front-end NextJS source code</td>
    </tr>
    <tr>
      <td><a href="./src/middleware.ts"><code>./src/middleware.ts</code></a></td>
      <td>Authentication middleware</td>
    </tr>
    <tr>
      <td><a href="./src/pages/api/trpc/[trpc].ts"><code>./src/pages/api/trpc/[trpc].ts</code></a></td>
      <td>tRPC response handler</td>
    </tr>
    <tr>
      <td><a href="./src/server/"><code>./src/server/</code></a></td>
      <td>Back-end API with NextJS, TRPC source code</td>
    </tr>
    <tr>
      <td><a href="./src/server/routers"><code>./src/server/routers</code></a></td>
      <td>App's different tRPC-routers</td>
    </tr>
    <tr>
      <td><a href="./src/server/apis/auth"><code>./src/server/apis/auth</code></a></td>
      <td>App's authentication TRPC APIS</td>
    </tr>
    <tr>
      <td><a href="./src/server/apis/store"><code>./src/server/apis/auth</code></a></td>
      <td>App's store TRPC APIs (includes getRestaurants and addFavorite procedures)</td>
    </tr>
  </tbody>
</table>
