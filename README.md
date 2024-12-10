This is a **Next.js** project, integrated with **Storybook** for component development and with **Contentful** for content management.

# Node Version

20.18.0 or higher

# Getting Started

## Install dependencies

```bash
npm install
```

## Development server

```bash
## To run Next.js development server:
npm run dev
## To run Storybook:
yarn dev:sb
## To run both Next.js and Storybook concurrently:
yarn dev:all
```

## Usage

Open http://localhost:3000 with your browser to see the Next.js result.
Open http://localhost:6006 with your browser to see the Storybook result.

# Contentful Configuration

Contentful API keys are required to run the project.
Create a `.env.local` file in the root directory and add the following environment variables:

```bash
CONTENTFUL_GRAPHQL_URL=https://graphql.contentful.com
CONTENTFUL_ACCESS_TOKEN=your_access_token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_access_token
CONTENTFUL_SPACE_ID=your_space_id
## Need to set the environment to fetch content from
CONTENTFUL_ENVIRONMENT=your_environment

```
