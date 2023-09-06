module.exports = {
   settings: {
      react: {
         version: 'detect'
      }
   },
   env: {
      browser: true,
      es2021: true
   },
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/jsx-runtime',
      'plugin:@conarti/feature-sliced/recommended'
   ],
   overrides: [
      {
         env: {
            node: true
         },
         files: ['.eslintrc.{js,cjs}'],
         parserOptions: {
            sourceType: 'script'
         }
      }
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
   },
   plugins: ['@typescript-eslint', 'react'],
   rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'jsx-quotes': ['error', 'prefer-double'],
      'comma-dangle': ['error', 'never'],
      'comma-spacing': ['warn', { before: false, after: true }]
   }
}
