import typescriptEslint from 'typescript-eslint'
import defaultSettings from '../../eslint.config.js'

export default [
  ...defaultSettings,
  ...typescriptEslint.config({
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
      },
    },
  }),
]
