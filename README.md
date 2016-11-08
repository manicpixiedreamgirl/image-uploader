# Image Uploader

* [Running](#running)
* [Testing](#testing)
* [Development](#development)
* [License](#license)

This is a [React](https://facebook.github.io/react/) allowing users to create and upload images to a backend server of your choice. You're backend server must handle a simple POST request with filedata and return a path to the upload location of the image.

## Running

You must have [node](https://nodejs.org/) and [npm](https://www.npmjs.org/) installed on your server or local machine. From the root project directory run these commands from the command line:

```
npm install
```

This should install all dependencies and dev dependencies. To build the project, i.e. compile the js and sass into two files, first run this command:

```
npm run build
```

This will perform a build of the js and sass and compress them via webpack. It will also build the login package and put those bundle files in the dist folder. The correct files are already being referenced in the index.html file and in the login index.html.

## Testing

Testing is managed by a few node modules that run through npm. The testing is done using [Mocha](https://mochajs.org/), it uses [Expect](https://github.com/mjackson/expect) to write the assertions about the tests.

To run this manually, run the following command while in the root directory of the repository:

```
npm run test
```

You can also run a watch process that will watch for changes and test after it detects a change. This is good if you have two tabs open, you can have one tab watching and recompiling and one tab for watching and testing.

```
npm run test:watch
```

## Development

To start the watch process run the following command.

```
npm start
```
This will perform an initial build and start a watcher process that will update bundle.js and bundle.css with any changes you wish to make.  This watcher is based on [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server) and transforms React's JSX syntax into standard JavaScript with [Babel](https://github.com/babel/babel) in real-time without the need to reload the server.

Then you can visit the app by going to [localhost](http://localhost:8080/)

## License

Licensed under MIT
