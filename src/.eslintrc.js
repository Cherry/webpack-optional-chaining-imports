

module.exports = {
	"parser": "@babel/eslint-parser",
	"parserOptions": {
		"allowImportExportEverywhere": true,
		"ecmaFeatures": {
			"impliedStrict": false,
		},
		"ecmaVersion": 2020,
		"sourceType": "module",
	},
	"rules": {
		"node/no-unsupported-features/es-syntax": "off",
	},
};