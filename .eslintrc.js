/*
 * @Author: Clloz
 * @Date: 2020-11-24 13:32:09
 * @LastEditTime: 2020-11-24 13:46:29
 * @LastEditors: Clloz
 * @Description:
 * @FilePath: /vue-shop/.eslintrc.js
 * @博观而约取，厚积而薄发，日拱一卒，日进一寸。
 */
module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    plugins: ['prettier', 'html'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': [
            'warn',
            {
                printWidth: 100,
                tabWidth: 4,
                useTabs: false,
                semi: true,
                singleQuote: true,
                jsxSingleQuote: false,
                trailingComma: 'all',
                quoteProps: 'as-needed',
                bracketSpacing: true,
                jsxBracketSameLine: false,
                arrowParens: 'avoid',
                requirePragma: false,
                insertPragma: false,
                proseWrap: 'preserve',
                htmlWhitespaceSensitivity: 'ignore',
                vueIndentScriptAndStyle: false,
                endOfLine: 'auto',
            },
        ],
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
    ],
};
