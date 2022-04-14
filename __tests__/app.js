'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-vue-3:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    // assert.file(['../generators/app/build/svg.js']);
    // assert.file(['dist']);
    // assert.file(['test']);
    assert.file(['src']);
    // assert.file(['.babelrc']);
    assert.file(['.editorconfig']);
    assert.file(['.env.development']);
    assert.file(['.env.production']);
    assert.file(['.env.test']);
    assert.file(['.eslintrc.js']);
    assert.file(['.eslintrc.json']);
    assert.file(['.gitignore']);
    assert.file(['babel.config.js']);
    assert.file(['ci.yml']);
    assert.file(['package.json']);
    assert.file(['README.md']);
    assert.file(['stylelint.config.js']);
    assert.file(['tsconfig.json']);
    assert.file(['vue.config.js']);
  });
});
