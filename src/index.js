function attr_fix(key, value) {
	if(typeof value === 'object') {
		value = Object
			.keys(value)
			.map(key => `${key}:${value[key]}`)
			.join(';');
	}

	return `${key}="${value}"`;
};

const flatten = arr =>
	Array.isArray(arr)
		? arr.map(flatten).join('')
		: arr;

function dom(type, attributes, ...children) {
	var attr = Object
		.keys(attributes || {})
		.map(key => attr_fix(key, attributes[key]))
		.join(' ');

	if(attr !== null && attr !== "")
		attr = " " + attr;

	if(typeof type == "function") {
		var props = attributes || {};
		props.components = {};
		props.children = children;
		return flatten(type(props));
	}

	return `<${type}${attr}>${flatten(children)}</${type}>`;
};

function sls(strings, ...values) {  
	let output = values
		.map((val, i) => strings[i] + val)
		.join('') +
		strings[values.length];

	return output
		.split(/(?:\r\n|\n|\r)/)
		.map(line => line.replace(/^\s+/gm, ''))
		.join(' ')
		.trim();
};

module.exports = {
	dom: dom,
	sls: sls
};
