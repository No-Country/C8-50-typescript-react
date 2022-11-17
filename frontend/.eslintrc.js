module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'react-app',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'standard-with-typescript',
		'plugin:import/typescript',
		'plugin:import/errors',
		'plugin:jsx-a11y/recommended',
		'eslint-config-prettier',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			tsx: true,
		},
		project: ['tsconfig.json'],
		tsconfigRootDir: __dirname,
	},
	plugins: ['react', 'import', 'jsx-a11y'],
	rules: {},
};
