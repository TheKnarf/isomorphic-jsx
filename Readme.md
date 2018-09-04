# isomorphic-jsx &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/TheKnarf/isomorphic-jsx/blob/master/LICENSE) [![NpmVersion](https://img.shields.io/npm/v/isomorphic-jsx.svg)](https://www.npmjs.com/package/isomorphic-jsx) [![Build Status](https://travis-ci.org/TheKnarf/isomorphic-jsx.svg?branch=master)](https://travis-ci.org/TheKnarf/isomorphic-jsx) [![Coverage Status](https://coveralls.io/repos/github/TheKnarf/isomorphic-jsx/badge.svg?branch=master)](https://coveralls.io/github/TheKnarf/isomorphic-jsx?branch=master) [![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/isomorphic-jsx/Lobby?source=orgpage)

A JSX-powered templating library for building multi page websites,
use the JSX syntax both in the browser and in Node.js.
A powerfull library in under 100 lines of code!

```sh
npm install --save isomorphic-jsx
npm install --save-dev babel-preset-react
```

You also need to install and setup babel with the `babel-preset-react` preset.

## Usage

You need to setup the following in `.babelrc`:

```js
{
  presets: ['react'],
  plugins: [
    ['transform-react-jsx', {
      'pragma': 'dom'
    }]
  ]
}
```

An example of a simple test case:

```js
import { dom } from 'isomorphic-jsx';

const Test = ({children}) => <div>{children}</div>;

console.log( <Test>tester</Test> ); // "<div>tester</div>"
```

Example repos that use `isomorphic-jsx`:

- [theneva/beer-or-movie](https://github.com/theneva/beer-or-movie)
