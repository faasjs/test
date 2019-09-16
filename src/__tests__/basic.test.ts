import { FuncWarpper } from '../../src/index';

test('basic', async function () {
  const handler = new FuncWarpper(require.resolve('./funcs/basic.func')).handler;
  const res = await handler({}, {});

  expect(res).toEqual(true);
});
