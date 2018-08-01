function attr_fix(key, value) {
	if(typeof value === 'object') {
		value = Object
			.keys(value)
			.map(key => `${key}:${value[key]}`)
			.join(';');
	}

	return `${key}="${value}"`;
};

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
		return type(props);
	}

	return `<${type}${attr}>${children.join('')}</${type}>`;
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
