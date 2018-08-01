# isomorphic-jsx

A library for using JSX in Node.js

```
npm install --save isomorphic-jsx
```

You also need to install and setup babel with the `react` preset.

## Usage

You need to setup the following in `.babelrc`:

```
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

```
import { dom } from 'isomporhic-jsx';

const Test = ({children}) => <div>{children}</div>;
console.log( <Test>tester</Test> ); // "<div>tester</div>"
```
