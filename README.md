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

### Proxy

To avoid
[cross-origin resource sharing (CORS)](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
issues, a proxy server is configured. It allows to access the sandbox server's
REST API via localhost. The configuration is available in
[setupProxy.js](src/setupProxy.js).

For further information, please consult
[proxying API Requests in Development](https://create-react-app.dev/docs/proxying-api-requests-in-development/).

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

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


