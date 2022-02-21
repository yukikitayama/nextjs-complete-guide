# Next.js & React - The Complete Guide

- [Next.js & React - The Complete Guide (incl. Two Paths!)](https://www.udemy.com/course/nextjs-react-the-complete-guide/)

## Basic

- `npx create-next-app`
  - Create a NextJS project
- `npm run dev`
  - Run application during development.

## Convention

- React components file naming convention is `something-something.js` unlike `SomethingSomething.js` in React
  - e.g. `event-list.js`

## NextJS folder structure

- `pages` folder
  - The most important where we can define file based routing.
  - React components should not be in `pages` folder.
- `public` folder 
  - It does not contain `index.html` unlike normal `React`.
  - Anything in `public` is served statically, such as images.
  - Files and folders stored outside of `public` are not made accessible by NextJS - visitors cannot load files from there.
  - `<img src="/images/IMAGE.png" />` to access the files in `public/images` folder in components.
    - No need to add `public` to the path.
- You can make `components` folder at root level of the NextJS project to store React components.

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
- `[...SLUG].js`
  - URL slug is the part of the URL after the last backslash.
  - Catch-all routes
  `{ SOMETHING: ['QUERY1', 'QUERY2', ...] }`
- Navigating with `Link`
  - Can route to another page without page reload and without losing states.
  - `import List from 'next/link';` No `{ }`.
  - `<Link href="/SOMEWHERE">SOMEWHERE</Link>`
- `pages/404.js`
  - Page for 404 error.

## Styling Components

- `CSS module` sets up a CSS which is bound to a single component, only affecting on the component, not other components.
  - CSS file name needs to be `FILE_NAME.module.css`.
- If you need to add custom styling to `Link (from 'next/link')`, you need to nest `<a>` in `<Link></Link>`, and assign classes to `<a className={classes.SOMETHING}>`
  - Don't add `href=""` to the `<a>`, because it will be added by the wrapping `<Link>`

## Non-NextJS

### Icons

- [heroicons](https://heroicons.com/)