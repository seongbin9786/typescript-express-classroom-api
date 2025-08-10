import js from '@eslint/js';
import n from 'eslint-plugin-n';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    prettierRecommended,
    n.configs['flat/recommended'],
  ],
  files: ['**/*.{js,ts}'],
  ignores: ['dist'],
  languageOptions: {
    ecmaVersion: 'latest',
    globals: globals.node,
  },
  plugins: {
    'unused-imports': unusedImports,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike', // interface, type, class, enum 등
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
    'n/no-missing-import': 'off', // NOTE: TSConfig Path Alias 인식을 못하므로 무시 (TODO: eslint-plugin-import 도입)
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'const', next: 'return' },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['../*'],
            message: '상위 디렉토리에 대한 상대 경로 대신 절대 경로 사용',
          },
        ],
      },
    ],
    eqeqeq: 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-template': 'error', // 문자열 연결 대신 템플릿 리터럴 사용
    'no-plusplus': 'error', // ++ 연산자 사용 금지
    'no-unneeded-ternary': 'error', // 불필요한 삼항 연산자 사용 금지
    'no-duplicate-imports': 'error', // 동일 모듈에서 임포트 여러 회 금지
  },
});
