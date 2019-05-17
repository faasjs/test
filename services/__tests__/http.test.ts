import { FlowWarpper } from '../../src/index';

const trigger = new FlowWarpper(require.resolve('../http.flow')).createTrigger('http');

test('http', async function () {
  const res = await trigger({}, {});

  expect(res.body).toEqual('{"data":true}');
});
