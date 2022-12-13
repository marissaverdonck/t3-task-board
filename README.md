# t3 Task board

## About

Ever wondered how to migrate your T3 application into a monorepo? Stop right here! This is the perfect starter repo to get you running with the perfect stack!

It uses [Turborepo](https://turborepo.org/) and contains:

```
.github
  └─ workflows
        └─ CI with pnpm cache setup
.vscode
  └─ Recommended extensions and settings for VSCode users
apps
  └─ next.js
      ├─ Next.js 13
      ├─ React 18
      ├─ TailwindCSS
      └─ E2E Typesafe API Server & Client
packages
 ├─ api
 |   └─ tRPC v10 router definition
 ├─ auth
     └─ authentication using next-auth. **NOTE: Only for Next.js app,
 └─ db
     └─ typesafe db-calls using Prisma
```

## Quick Start

To get it running, follow the steps below:

### Setup dependencies

```diff
# Install dependencies
pnpm i

# Configure environment variables.
# There is an `.env.example` in the root directory you can use for reference
cp .env.example .env

# Start Docker
docker-compose up -d

# Push the Prisma schema to your database
pnpm db-push

# Start the app
pnpm dev

# Open your browser
The app is running on localhost:3000 and the API on http://localhost:5555/
```

## Modal diagrams 
#### Create new task
<img width="550" alt="Task" src="https://user-images.githubusercontent.com/43657951/207373406-d929d99a-1e6b-4d59-bd1d-a94f23ba0bb8.png">

#### Edit task
<img width="574" alt="Screenshot 2022-12-13 at 16 31 15" src="https://user-images.githubusercontent.com/43657951/207375871-b55dd3bf-3359-4bcb-833f-28499ff0806a.png">



## Domain Map

| Generic        | Core           | Support        |
| -----------    | -----------    |-----------     |
| Authentication | Create tasks   | Login          |
| Payment        | Edit tasks     | User management|
| Notifications  | Create columns |                |



## Test strategy
I will use the Diamond test strategy. The main goal of the app is creating and editing tasks, it is important that all functions inside the components work well together and API calls don't fail.
