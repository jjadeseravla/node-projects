import { expect } from 'chai';

it('should add nums', () => {
  const num1 = 2;
  const num2 = 3;
  expect(num1 + num2).to.equal(5);
})
it('should NOT be 6', () => {
  const num1 = 2;
  const num2 = 3;
  expect(num1 + num2).to.not.equal(6);
})