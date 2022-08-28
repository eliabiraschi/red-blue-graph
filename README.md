# Red-Blue Graph

This small webapp checks if a provided graph is both bipartite, red-blue colorable, and connected.

A live demo can be found here: [red-blue-graph.web.app](https://red-blue-graph.web.app/).

## Local running

Since there is no back-end logic, the whole webapp can be run locally with ease.

### Requirements

- NodeJS 16
- Firebase Tools (optional, for deployment)

**NOTE**  
It probably works with NodeJS 14, but I haven't tested it.

### Installation

```bash
$ git clone
$ cd red-blue
$ npm i
```

### Running

```bash
$ npm start
```

### Testing

Once the packages are installed it is also possible to run the tests with:

```bash
$ npm run test
```

## Scripts

In the `package.json` file there are other scripts too coming from the default template for a ReactJS project.
Please refer to ReactJS documentation for further information.

## Build and Deployment

The project is set up to be deployed to Firebase hosting.
You can check the [official documentation](https://firebase.google.com/docs/hosting/quickstart).
You might want to change the name of the project in `.firebaserc` to match the one you've created on your Firebase console.

### Build

To build the ReactJS command it used:

```bash
$ npm run build
```

### Deploy

A shortcut to the firebase tools command for deployment is provided:

```bash
$ npm run deploy
```

**NOTE** `build` and `deploy` are not dependent. It does not matter when building, but it does
when deploying since it will deploy what is currently in the `build` folder.
I suggest to always run them together:

```bash
$ npm run build && npm run deploy
```
