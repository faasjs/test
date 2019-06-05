import { FuncWarpper } from '../../src/index';

const handler = new FuncWarpper(require.resolve('./funcs/http.func')).handler();

test('http', async function () {
  const res = await handler({}, {});

  expect(res.body).toEqual('{"data":true}');
});
