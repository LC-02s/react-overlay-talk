import globals from 'globals'
import pluginJs from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import pluginReact from 'eslint-plugin-react'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import typescriptEslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...typescriptEslint.config(
    {
      ignores: ['**/node_modules/*', '**/dist/*', '**/build/*', '**/*.cjs', '**/*.mjs', '**/*.js'],
    },
    {
      extends: [pluginJs.configs.recommended, ...typescriptEslint.configs.recommended],
      files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        sourceType: 'module',
      },
      plugins: {
        react: pluginReact,
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
        'jsx-a11y': jsxA11y,
      },
      rules: {
        ...pluginReact.configs.recommended.rules,
        ...pluginReact.configs['jsx-runtime'].rules,
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react/no-unknown-property': ['error', { ignore: ['css'] }],
        ...reactHooks.configs.recommended.rules,
        ...jsxA11y.configs.recommended.rules,
        'jsx-a11y/label-has-associated-control': ['error', { some: ['nesting', 'id'] }],
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      },
      settings: {
        react: { version: 'detect' },
      },
    },
  ),
]
