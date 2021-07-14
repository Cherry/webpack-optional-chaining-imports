'use strict';
const path = require('path');

module.exports = {
	devtool: 'source-map',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index.bundle.js',
	},
};