module.exports = {
    root: true,
    overrides: [{
        files: ['*.tsx', '*.ts', '*.jsx', '*.js'],
        extends: [
            "standard-with-typescript",
            "plugin:react/recommended"
        ],
        env: {
            browser: true,
            es6: true,
            jest: true,
        },
        parserOptions: {
            project: true,
            parser: '@typescript-eslint/parser',
            ecmaFeatures: {
                jsx: true
            },
            ecmaVersion: "latest",
            sourceType: "module"
        },
        plugins: [
            "react",
            "@typescript-eslint",
            "formatjs"
        ],
        rules: {
            "@typescript-eslint/quotes": ["error", "double"],
            "@typescript-eslint/object-curly-spacing": ["error", "never"],
            "@typescript-eslint/explicit-function-return-type": "off",
            "react/react-in-jsx-scope": "off",
            "operator-linebreak": ["error", "after"],
            "@typescript-eslint/strict-boolean-expressions": "off",
            "@typescript-eslint/prefer-nullish-coalescing": "warn",
            "formatjs/no-offset": "error",
            "max-len": ["error", { ignoreComments: true, code: 120}],
            "formatjs/no-literal-string-in-jsx": ["warn",{
                
                exclude: [
                    ["...","message"]
                ]
            }]
        },
        settings: {
            react: {
                pragma: "React",
                version: "detect"
            }
        },
        
    }],
}