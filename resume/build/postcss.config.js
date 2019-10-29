const plugins = [
	require('tailwindcss')('./build/tailwind.config.js'),
	require('postcss-nesting')(),
	require('autoprefixer'),
];

if (process.env.NODE_ENV === 'production') {
	plugins.push(
		require('@fullhuman/postcss-purgecss')({
			content: [
				'./*.html',
			],
			defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
		})
	);

	plugins.push(
		require('cssnano')({
			preset: 'default',
		})
	);
}

module.exports = {
	plugins,
}
