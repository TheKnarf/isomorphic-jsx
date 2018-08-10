var assert = require('assert');
import { dom } from '../src/index.js';

describe('isomorphic-jsx', () => {
	describe('#dom()', () => {
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

	})
})
