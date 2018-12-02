var assert = require('assert');
import isHostileOrEmpty from 'isHostileOrEmpty'

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', () => {
      isHostileOrEmpty([], 0, 'black')
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});