const flatten = arr =>
	Array.isArray(arr)
		? arr.map(flatten).join('')
		: arr;

const mapObject = obj =>
	Object.keys(obj || {})
			.map(key => ({ key, value: obj[key] }));

const dom = (type, attributes, ...children) => {
	if(typeof type == "function") {
		var props = attributes || {};
		props.components = {};
		props.children = children;
		return flatten(type(props));
	}

	const handleAttrObjects = obj =>
		(typeof obj === 'object')
			? mapObject(obj).map(({key, value}) => `${key}:${value}`).join(';')
			: obj;

	const attr = mapObject(attributes)
		.map(({key, value}) => ` ${key}="${handleAttrObjects(value)}"`)
		.join('');

	return `<${type}${attr}>${flatten(children)}</${type}>`;
};

module.exports = { dom, createElement: dom };
