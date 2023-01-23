/** @jsxRuntime automatic */
/** @jsxImportSource ../src */

// Babel will only ever insert ESM imports for jsxImportSource,
// so just treat this file as ESM and then transpile it.
import assert from 'assert';

describe('isomorphic-jsx (JSX auto mode)', () => {

	it('<div>test</div>', () => {
		assert.equal(
			<div>test</div>,
			"<div>test</div>"
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

	it('<></>', () => {
		assert.equal(
			<><div/><div/></>,
			'<div></div><div></div>'
		);
	})
})
