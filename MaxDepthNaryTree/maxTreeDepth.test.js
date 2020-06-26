const maxTreeDepth = require('./maxTreeDepth');

test('Leet code test case 1 pass', () => {
  expect(maxTreeDepth([1,null,3,2,4,null,5,6])).toBe(3);
})

test('Leet code test case 1 pass', () => {
  expect(maxTreeDepth([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14])).toBe(5);
})

test('Expect it to return 0 when there are no nodes', () =>{
  expect(maxTreeDepth([])).toBe(0);
})