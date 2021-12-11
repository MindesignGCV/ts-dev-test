module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  noInlineConfig: true,
  plugins: ["@typescript-eslint/eslint-plugin", "sonarjs", "functional"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:sonarjs/recommended",
    "plugin:functional/external-recommended",
    "plugin:functional/recommended",
    "plugin:functional/stylistic",
    "plugin:prettier/recommended",
  ],
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: [".eslintrc.cjs"],
  rules: {
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": true,
        "ts-ignore": true,
        "ts-nocheck": true,
        "ts-check": true,
      },
    ],
    // "func-style": "error",
    // "no-restricted-globals": ["error", "hole"],
    "functional/no-class": "off",
    "functional/functional-parameters": "off",
    "functional/no-conditional-statement": "off",
    "functional/no-expression-statement": "off",
    "functional/no-return-void": "off",
    "functional/no-this-expression": "off",
    "functional/no-method-signature": "error",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "no-implicit-coercion": ["error", { disallowTemplateShorthand: true }],
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          object: false,
        },
        extendDefaults: true,
      },
    ],
    "sonarjs/no-identical-functions": "off",
  },
};
