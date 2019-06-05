import { FuncWarpper } from '../../src/index';

const handler = new FuncWarpper(require.resolve('./funcs/basic.func')).handler();

test('basic', async function () {
  const res = await handler({}, {});

  expect(res).toEqual(true);
});
