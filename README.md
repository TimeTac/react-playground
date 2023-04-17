# TimeTac Playground
## Getting Started

This project is configured to use a designated account in TimeTac's sandbox environment.
The `playground` account is available at https://go-sandbox.timetac.com/playground. It uses a special configuration allowing to access and 
modify all the account's data. Log in with the following credentials:

* user: `manager`
* password: `playgroundNotSoSecure`

These credentials are used for authentication in the web app as well as the
REST API. For convenience, they are already hard-coded in
[apiConfig.ts](src/apiConfig.ts).

This demo-account is reset to its initial state in regular intervals.

Node [v18](https://nodejs.org/en) is required to run this project.

### Proxy

To avoid
[cross-origin resource sharing (CORS)](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
issues, a proxy server is configured. It allows to access the sandbox server's
REST API via localhost. The configuration is available in
[vite.config.ts](vite.config.ts).

### TimeTac JS Client Library
Of course it is possible to request data using a general purpose
library like [axios](https://github.com/axios/axios). To facilitate the task,
TimeTac provides the open source
[@timetac/js-client-library](https://github.com/TimeTac/js-client-library).
This library is used in the playground by default. It is also imported by
some of TimeTac's newest products.

### REST API Documentation
Please refer to https://api.timetac.com/ for a documentation of
TimeTac's REST API.

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `yarn install`

Installs all dependencies.

### `yarn start`

Runs the app in the development mode and automatically launches the proxy
server.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the jest test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Learn More

- [React 18](https://react.dev/blog/2022/03/29/react-v18)
- [Vite](https://vitejs.dev/)
- [Tailwind](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)


