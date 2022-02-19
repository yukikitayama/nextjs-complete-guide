# Next.js & React - The Complete Guide

- [Next.js & React - The Complete Guide (incl. Two Paths!)](https://www.udemy.com/course/nextjs-react-the-complete-guide/)

## Basic

- `npx create-next-app`
  - Create a NextJS project
- `npm run dev`
  - Run application during development.

## NextJS folder structure

- `pages` folder is the most important where we can define file based routing.
- `public` folder does not contain `index.html`.

## File-based Routing

- NextJS infers the routes from the folder structure.

## Route

- File-based routing (NextJS)
  - No extra boilerplate code
    - i.e. No `<Switch><Route><COMPONENT />...` things.
  - Intuitive system. Each JS file for each page.
  - File + folder structure completely influences routes.
- Code-based routing (React + react-router) 
  - Need boilerplate setup in code, such as (`<Switch>, <Route>, ...`)
  - Straightforward, but includes new components and concepts
  - File + folder setup does not affect at all.
- `import { useRouter } from 'next/router';`
  - React Hook defined by NextJS team.
  - This is functional component. 
  - If React uses class-based components, use `import { withRouter } from 'next/router';`
- `[...SOMETHING].js`
  - Catch-all routes
  `{ SOMETHING: ['QUERY1', 'QUERY2', ...] }`
- Navigating with `Link`
  - Can route to another page without page reload and without losing states.
  - `import List from 'next/link';` No `{ }`.
  - `<Link href="/SOMEWHERE">SOMEWHERE</Link>`
- `pages/404.js`
  - Page for 404 error.