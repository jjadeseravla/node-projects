import { expect } from 'chai';
import { myfunc } from '../middleware/is-auth.js';

it('should throw err if no authorisation header is present', () => {
  const req = {
    get: function (headerName) {
      return null;
    }
  };
  expect(myfunc.bind(this, req, {}, () => { })).to.throw('Not authenticated');
})