import { FuncWarpper } from '../../src/index';

test('http', async function () {
  const func = new FuncWarpper(require.resolve('./funcs/http.func'));
  const handler = await func.handler();

  expect(func.func.plugins[0].cookie).toBeUndefined();

  const res = await handler({
    headers: {}
  }, {});

  expect(res.body).toEqual('{"data":true}');
});

test('with mountData', async function () {
  const func = new FuncWarpper(require.resolve('./funcs/http.func'));
  await func.handler({ headers: {} });

  expect(func.func.plugins[0].cookie).not.toBeUndefined();
});
