# Next.js & React - The Complete Guide

- [Next.js & React - The Complete Guide (incl. Two Paths!)](https://www.udemy.com/course/nextjs-react-the-complete-guide/)

## Basic

- `npx create-next-app`
  - Create a NextJS project
- `npm run dev`
  - Run application during development.
- `npm run build`
  - Pre-generate pages
- `npm start`
  - Run after `npm run build` to run production server.

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


## Pre-Rendering (Server-Side Rendering)

- By default, NextJS pre-renders all the non-dynamic data (Something hard-coded to React components and NextJS pages) to HTML
  - e.g. Data from HTTP requests are dynamic data.

### Background

- In Chrome Developer tool Elements tab, you can see DOM elements, but this is the final output by JavaScipt and React reandering DOM after loading the page.
- `View page source` by right-click the chrome screen is the actual HTML content served by the server.
  - This HTML does not contain the actual data.
- In client-side rendering, user experience could be sub-optimal when fetching data.
- Biggest problem is `search engine optimization`, because the HTML that search engine sees is the actual HTML before JavaScript and React renders components.
  - Seach engine sees the HTML of `View page source`.
- `Hydrate with React code` once loaded
  - Page / App is interactive.
- Pre-rendering only matters for the initial loading. After that, application will be standard Single Page Application.

### Static Generation

- Recommended
- All the pages are pre-generated in advance during build time
- The generated pages can be cached by CDN to serve the app.
- `export async function getStaticProps(context) { ... }`
  - Something to normally run in server.
- `getStaticProps()` can be added to any page files
  - NextJS will call this function on you behalf when generating pages, or build time.
  - Also signal NextJS that the page with this function needs to be pre-generated.
- `import fs from 'fs';`
  - Filesystem module from NodeJS, not third party package, core NodeJS module.
  - `fs` fails in the client-side browser.
- `npm run build`
  - Pre-generate pages.
  - `.next/server` folder is generated and it contains the pre-rendered HTMLs.
- `npm start`
  - View the production ready pages locally.
- `getStaticPaths()`
  - Dynamically generated pages need both `getStaticPaths()` and `getStaticProps()`.
  - `fallback: false`
    - If some page is not contained by `getStaticPath()`, NextJS returns 404.
  - `fallback: true`
    - Return a temporary page until NextJS loads a page.
  - `fallback: 'blocking'`
    - NextJS doesn't render a page until it gets the data.

### Incremental Static Generate

- Re-generate it on every request at most every X seconds.
  - For highly dynamic pages where contents change all the time, set a low second
  - Less dynamic pages maybe have minutes.
- If another request is coming before the threshold second, re-generation doesn't happen.
  - Re-generation will happen next time a request comes after the threshold second.

### Server-Side Rendering

- Pages are created just in time after deployment when a request reaches to a server.
- `export async function getServerSideProps(context) { ... }`
  - Runs for every incoming request
  - `revalidate` is not necessary
  - `context` contains `params`, `req`, and `res`.

## Stale-While-Revalidate (SWR)

- React hook for data fetching
- `$ npm install swr`

```javascript
import useSWR from 'swr';

// In React component
const { data, error } = useSWR('URL', (url) => fetch(url).then(res => res.json()));
```

## Styling Components

- `CSS module` sets up a CSS which is bound to a single component, only affecting on the component, not other components.
  - CSS file name needs to be `FILE_NAME.module.css`.
- If you need to add custom styling to `Link (from 'next/link')`, you need to nest `<a>` in `<Link></Link>`, and assign classes to `<a className={classes.SOMETHING}>`
  - Don't add `href=""` to the `<a>`, because it will be added by the wrapping `<Link>`

## Non-NextJS

### Icons

- [heroicons](https://heroicons.com/)