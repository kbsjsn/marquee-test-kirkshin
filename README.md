## Setup
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

```

## File Directory Structure
- When implementing the React with Next, I attempted to follow practices outlined in NextJS documentation along with using React functional components that have a single responsibility.
- I used pages/_app.js to set a global stylesheet and to retrieve the content data which I set to a React context. That way subsequent pages would not have to make a fetch request; they could retrieve it from the context.
- I made a separate CSS file for each component, but a better implementation would have been using CSS modules and styled components.

## Further comments
- I made a 'homepage' with hardcoded content, but having content loaded from the fetched data would be a better implementation.
- Similarly the menu items were hardcoded but it would have better to use the fetched data.