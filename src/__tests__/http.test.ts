import { FuncWarpper } from '../../src/index';

test('http', async function () {
  const func = new FuncWarpper(require.resolve('./funcs/http.func'));

  const res = await func.handler({
    headers: {}
  }, {});

  expect(res.body).toEqual('{"data":true}');
});

test('with mountData', async function () {
  const func = new FuncWarpper(require.resolve('./funcs/http.func'));
  await func.mountedHandler({ headers: {} });

  const res = await func.handler({
    headers: {}
  }, {});

  expect(res.body).toEqual('{"data":true}');
});
