import eslintPluginAstro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
    {
        files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
        plugins: {
            'jsx-a11y': jsxA11y,
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            // ... any rules you want
            'jsx-a11y/alt-text': 'error',
        },
        // ... others are omitted for brevity
    },
    {
        files: ['**/*.astro'],
        ...eslintPluginAstro.configs.recommended,
        parser: 'astro-eslint-parser',
        parserOptions: {
            parser: jsxA11y,
            extraFileExtensions: ['.astro'],
        },
    },
];
