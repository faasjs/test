# @faasjs/test

测试工具

[![License: MIT](https://img.shields.io/npm/l/@faasjs/test.svg)](https://github.com/faasjs/test/blob/master/LICENSE)
[![Build Status](https://img.shields.io/travis/com/faasjs/test.svg)](https://travis-ci.com/faasjs/test)
[![Coverage Status](https://img.shields.io/codecov/c/github/faasjs/test.svg)](https://codecov.io/gh/faasjs/test)
[![NPM Stable Version](https://img.shields.io/npm/v/@faasjs/test/stable.svg)](https://www.npmjs.com/package/@faasjs/test)
[![NPM Beta Version](https://img.shields.io/npm/v/@faasjs/test/beta.svg)](https://www.npmjs.com/package/@faasjs/test)

## How to use?

```typescript
import { FlowWarpper } from '@faasjs/test';

const trigger = new FlowWarpper(require.resolve('../demo.flow')).createTrigger();

describe('demo', function () {
  test('should work', async function () {
    const res = await trigger({}, {})

    expect(res).toBeTruthy();
  });
});
```
