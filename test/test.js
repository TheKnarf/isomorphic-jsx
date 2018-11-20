var assert = require('assert');
const { dom, fragment } = require('../src/index.js');

describe('isomorphic-jsx', () => {

	it('<div>test</div>', () => {
		assert.equal(
			<div>test</div>,
			"<div>test</div>"
		);
	})

	it('function', () => {
		const Test = () => <div>test</div>;

		assert.equal(
			<Test />,
			"<div>test</div>"
		);
	})

	it('function({children})', () => {
		const Test = ({children}) => <div>{children}</div>;

		assert.equal(
			<Test>tester</Test>,
			"<div>tester</div>"
		);
	})

	it('typeof children == array', () => {
		assert.equal(
			<div>
			{[
				"one",
				"two"
			]}
			</div>,
			"<div>onetwo</div>"
		);
	})

	it('function returning array', () => {
		const Test = () => [ <div></div>, <p></p> ]	;
		assert.equal(
			<Test />,
			"<div></div><p></p>"
		);
	})

	it('attributes', () => {
		assert.equal(
			<div id="test"></div>,
			'<div id="test"></div>'
		);
		assert.equal(
			<div id="test" class="bob"></div>,
			'<div id="test" class="bob"></div>'
		);
	})

	it('attribute object', () => {
		assert.equal(
			<div style={{ color: 'red', border: '1px solid black' }} />,
			'<div style="color:red;border:1px solid black"></div>'
		)
	})

	it('namespace', () => {
		assert.equal(
			<namespace:test />,
			'<namespace:test></namespace:test>'
		)
		assert.equal(
			<test namespace:attr />,
			'<test namespace:attr=\"true\"></test>'
		)
	})

	it('<></>', () => {
		assert.equal(
			<><div/><div/></>,
			'<div></div><div></div>'
		);
	})
})
