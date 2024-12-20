## Visit the Allergy Weather App 

You can visit the app here [AllergyWeatherApp](https://allergyweatherapi-nmwc.vercel.app/)

## Day 1 Log

### Tasks Completed

- Initialized the Next.js project with `create-next-app`.
- Set up Firebase integration for authentication.
- Began drafting wireframes for the login page and product listing page.

### Challenges and Solutions

- Issues with how to setup wireframe and down scale original project to implement a seamless app between the original application site to the launched app.

### Learnings and Insights

- Learned about the benefits of using Next.js for server-side rendering and its impact on SEO.
- Gained a better understanding of Firebase's authentication flow.

### Next Steps

- Finalize wireframes for the product details page.
- Start implementing the Header component.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

![wireframe](/public/wireframe.png)

## Day 2 Log
### Tasks Completed

- Completed setup of components and what their purposes would be for. 
- Created each component for its specific functionality. 
- Added image files to project.

### Learnings and Insights

- Watch for how you write the components and any wording that requires you to use [ASCIIFORMATTING](https://www.ascii-code.com/) in order to avoid issues with deployment via vercel 

### Next Steps

- Fix issues with ASCII in project for vercel deployment
- Add .env file to project for api key
- Create function that returns the api data to the component

## Day 2 Log
### Tasks Completed

- Created mailing list component which is set as a footer to send an email to user.
- Added router to all useEffect and useState files to ensure proper movement at deployment. 

### Learnings and Insights

- How to use command prompt to allow access to mail client 

### Next Steps

- deploy page and possibly correct ASCII formatting on pages.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
