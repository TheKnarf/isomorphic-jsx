# isomorphic-jsx

[![forthebadge](https://forthebadge.com/images/badges/thats-how-they-get-you.svg)](https://forthebadge.com)

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
