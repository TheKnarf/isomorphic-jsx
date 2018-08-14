# isomorphic-jsx &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/TheKnarf/isomorphic-jsx/blob/master/LICENSE) [![NpmVersion](https://img.shields.io/npm/v/isomorphic-jsx.svg)](https://www.npmjs.com/package/isomorphic-jsx) [![Build Status](https://travis-ci.org/TheKnarf/isomorphic-jsx.svg?branch=master)](https://travis-ci.org/TheKnarf/isomorphic-jsx) [![Coverage Status](https://coveralls.io/repos/github/TheKnarf/isomorphic-jsx/badge.svg?branch=master)](https://coveralls.io/github/TheKnarf/isomorphic-jsx?branch=master)

A library for using JSX in Node.js

```sh
npm install --save isomorphic-jsx
```

You also need to install and setup babel with the `react` preset.

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

Example repos that uses `isomorphic-jsx`:

- [theneva/beer-or-movie](https://github.com/theneva/beer-or-movie)

[![forthebadge](https://forthebadge.com/images/badges/thats-how-they-get-you.svg)](https://forthebadge.com)
