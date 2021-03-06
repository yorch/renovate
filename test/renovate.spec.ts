import * as renovateWorker from '../lib/workers/global';

Object.defineProperty(renovateWorker, 'start', { value: jest.fn() });

describe('renovate', () => {
  it('starts', () => {
    require('../lib/renovate');
    expect(renovateWorker.start).toHaveBeenCalledTimes(1);
  });
});
