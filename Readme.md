<img width="400px" src="https://github.com/TheKnarf/isomorphic-jsx/raw/master/logo/logo.png">

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/TheKnarf/isomorphic-jsx/blob/master/LICENSE) [![NpmVersion](https://img.shields.io/npm/v/isomorphic-jsx.svg)](https://www.npmjs.com/package/isomorphic-jsx) [![Build Status](https://travis-ci.org/TheKnarf/isomorphic-jsx.svg?branch=master)](https://travis-ci.org/TheKnarf/isomorphic-jsx) [![Coverage Status](https://coveralls.io/repos/github/TheKnarf/isomorphic-jsx/badge.svg?branch=master)](https://coveralls.io/github/TheKnarf/isomorphic-jsx?branch=master) [![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/isomorphic-jsx/Lobby?source=orgpage)

A JSX-powered templating library for building multi page websites,
use the JSX syntax both in the browser and in Node.js.
A powerfull library in under 100 lines of code!

```sh
npm install --save isomorphic-jsx
npm install --save-dev @babel/core @babel/preset-react
```

You also need to install and setup babel with the react preset for babel preset.

## Usage
You need to setup the following in `.babelrc`:

```js
{
  presets: [
    [ '@babel/preset-react', {
        throwIfNamespace: false
        
        // Choose one (default: "classic"):
        // - "classic" relies on manual imports in files where JSX is used
        // - "auto" tells the compiler to insert JSX imports automatically
        runtime: "classic" | "auto"
        
        // If using runtime:classic, specify the function names:
        pragma: 'dom',
        pragmaFrag: 'fragment',
        
        // If using runtime:auto, specify the folder:
        importSource: "isomorphic-jsx/src",
    }]
  ]
}
```

An example of a simple test case:

```js
import { dom, fragment } from 'isomorphic-jsx'; // import not needed in "auto"/"react-jsx" mode

const Test = ({children}) => <div>{children}</div>;

console.log( <Test>tester</Test> ); // "<div>tester</div>"
```

Example repos that use `isomorphic-jsx`:

- [theneva/beer-or-movie](https://github.com/theneva/beer-or-movie)
