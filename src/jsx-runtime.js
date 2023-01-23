const { dom, fragment } = require('.');

const jsx = (type, { children, ...attributes}) => dom(type, attributes, ...(children || []));

module.exports = { jsx, jsxs : jsx, Fragment : fragment };
