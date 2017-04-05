'use strict';

module.exports = (str, env) => {
	if (typeof str !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof str}`);
	}

	env = env || process.env;

	Object.keys(env).forEach(e => {
		str = str.indexOf(`$${e}`) >= 0 ? str.replace(new RegExp(`\\$${e}`, 'g'), env[e]) : str;
	});

	return str;
};
