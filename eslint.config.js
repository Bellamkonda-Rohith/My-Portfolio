export default [
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
+       jsxPragma: 'React' // Add this line
      },
    },
    settings: {
-      react: { version: '18.3' }
+      react: { version: 'detect' } // Let ESLint auto-detect React version
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
+     'react/react-in-jsx-scope': 'off', // Add this rule
      // ... other rules
    }
  }
]