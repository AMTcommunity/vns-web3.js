
# Vnscoin JavaScript API

[![Join the chat at https://gitter.im/ethereum/web3.js](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ethereum/web3.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)[![npm](https://img.shields.io/npm/dm/web3.svg)](https://www.npmjs.com/package/web3) [![Build Status][travis-image]][travis-url] [![dependency status][dep-image]][dep-url] [![dev dependency status][dep-dev-image]][dep-dev-url] [![Coverage Status][coveralls-image]][coveralls-url]
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

This is the Vnscoin [JavaScript API][docs]
which connects to the [Generic JSON RPC](https://github.com/AMTcommunity/go-vnscoin/wiki/JSON-RPC) spec.

You need to run a local or remote [Vnscoin] node to use this library.

Please read the [documentation][docs] for more.

## Installation

### Node

```bash
npm install vns-web3@1.2.4
```

### In the Browser

Use the prebuild `dist/web3.min.js`, or
build using the [web3.js][repo] repository:

```bash
npm run-script build
```

Then include `dist/web3.js` in your html file.
This will expose `Web3` on the window object.

## Usage

```js
// in node.js
var Web3 = require('vns-web3');

var web3 = new Web3('ws://localhost:8546');
console.log(web3);
> {
    vns: ... ,
    shh: ... ,
    utils: ...,
    ...
}
```

Additionally you can set a provider using `web3.setProvider()` (e.g. WebsocketProvider):

```js
web3.setProvider('ws://localhost:8546');
// or
web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8546'));
```

There you go, now you can use it:

```js
web3.vns.getAccounts().then(console.log);
```

### Usage with TypeScript

We support types within the repo itself. Please open an issue here if you find any wrong types.

You can use `web3.js` as follows:

```typescript
import Web3 from 'vns-web3';
const web3 = new Web3('ws://localhost:8546');
```

If you are using the types in a `commonjs` module like for example a node app you just have to enable `esModuleInterop` in your `tsconfig` compile option, also enable `allowSyntheticDefaultImports` for typesystem compatibility:

```js
"compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    ....
```

## Documentation

Documentation can be found at [read the docs][docs].

## Building

### Requirements

-   [Node.js](https://nodejs.org)
-   [npm](https://www.npmjs.com/)

```bash
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```

### Building (gulp)

Build only the web3.js package

```bash
npm run-script build
```

Or build all sub packages as well:

```bash
npm run-script build-all
```

This will put all the browser build files into the `dist` folder.

### Testing (mocha)

```bash
npm run test
```

### Contributing

-   All contributions have to go into 1.x, or the 2.x branch
-   Please follow the code style of the other files, we use 4 spaces as tabs.


[repo]: https://github.com/AMTcommunity/vns-web3.js
[docs]: http://web3js.readthedocs.io/
[npm-image]: https://badge.fury.io/js/web3.png
[npm-url]: https://npmjs.org/package/web3
[travis-image]: https://travis-ci.org/ethereum/web3.js.svg
[travis-url]: https://travis-ci.org/ethereum/web3.js
[dep-image]: https://david-dm.org/ethereum/web3.js.svg
[dep-url]: https://david-dm.org/ethereum/web3.js
[dep-dev-image]: https://david-dm.org/ethereum/web3.js/dev-status.svg
[dep-dev-url]: https://david-dm.org/ethereum/web3.js#info=devDependencies
[coveralls-image]: https://coveralls.io/repos/ethereum/web3.js/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/ethereum/web3.js?branch=1.x
[waffle-image]: https://badge.waffle.io/ethereum/web3.js.svg?label=ready&title=Ready
[waffle-url]: https://waffle.io/ethereum/web3.js
