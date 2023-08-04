# meetups-app

An application with a basic functionality created just to practice the nextJS and it's API Routes.

### Things to consider and be aware in the future projects:

- the app is made using the Pages Router (but could be with the App Router once it will be stable)
- images settings in the next.config should be more specific (to protect the app from malicious users)
- currently Vercel allows for up to 3 projects to be deployed for free (so pay or find another hosting provider)

## Project Setup

### Installation

- download or clone this repo

- go to your local project directory in console and install all packages:

```bash
npm i
# or
yarn
# or
pnpm i
```

### Database setup

The steps below are for the MongoDB as the app uses it, but you can adjust the code (in utils/db.js file) to use any other database if you prefer.

- register to the MongoDB (the MongoDB Atlas is free with shared clusters), then log in

- create new project with new cluster

- add new database user (in project's Database Access) with the "Read and write to any database" built-in role

- set the connection to the application (in the project's cluster) with the Node.js as a driver, then copy generated connection string into your cloned repo code (as the MONGODB_URI environment variable)

- add following environment variables (for example via the .env.local file added to the project's root directory):

  - DB_DATABASE (is used in functions inside of the utils/db.js file),
  - MONGODB_URI (is used in connectDatabase function inside of the utils/db.js file)

  Optionally you can also add DB_CLUSTER, DB_USER and DB_PASS to use within MONGODB_URI for better readability. An example of the .env.local file content:

  ```bash
  DB_DATABASE=databaseName
  DB_CLUSTER=clusterName
  DB_USER=username
  DB_PASS=user-password

  MONGODB_URI=mongodb+srv://$DB_USER:$DB_PASS@$DB_CLUSTER.hfdpj4c.mongodb.net/$DB_DATABASE?retryWrites=true&w=majority
  ```

### Running Project Locally

The project is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) from [Next.js](https://nextjs.org/). So, following commands can be used to run the project:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

- to run a production build locally use command:

```bash
npm run build
#or
yarn build
#or
pnpm build
```

You can also build the application deploying to hosting provider, for example on [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. More details: [Next.js deployment documentation](https://nextjs.org/docs/deployment).

In the case of deploying the app on Vercel Platform, you will need integrate your project with the MongoDB. Full instruction: [MongoDB and Vercel integration](https://www.mongodb.com/developer/products/atlas/how-to-connect-mongodb-atlas-to-vercel-using-the-new-integration/)

### Production Build Preview

- to preview and test a production build locally use command:

```bash
npm run start
#or
yarn start
#or
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see and test the built result.

## License

This project is licensed under the [MIT] License - see the [LICENSE.md](LICENSE) file for details.
