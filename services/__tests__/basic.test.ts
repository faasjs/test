import { FlowWarpper } from '../../src/index';

const trigger = new FlowWarpper(require.resolve('../basic.flow')).createTrigger();

test('basic', async function () {
  const res = await trigger({}, {});

  expect(res).toEqual(true);
});
