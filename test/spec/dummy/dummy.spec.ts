import { DummyService } from '../../../src/dummy/dummy';

describe('load test', function () {

  it('should load', function () {
        expect(new DummyService()).not.toBeNull();
  });

});
