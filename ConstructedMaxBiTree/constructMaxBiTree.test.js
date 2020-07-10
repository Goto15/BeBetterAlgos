const maxTreeDepth = require('./constructMaxBiTree');

test('Leet code test case 1 pass', () => {
  expect(maxTreeDepth([3,2,1,6,0,5])).toBe([6,3,5,null,2,0,null,null,1]);
})