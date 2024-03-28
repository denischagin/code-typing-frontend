module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'simple-import-sort'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    ['^react'],
                    ["^@chakra-ui/react"],
                    ['^effector'],
                    ['^react-router-dom', '^react-router'],
                    ['^classnames'],
                    ['^@/app', '^@/pages', '^@/widgets', '^@/features', '^@/entities', '^@/shared'],
                    ['^.+\\.scss$'],
                ],
            },
        ],
    },
};