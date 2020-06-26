const maxTreeDepth = require('./maxTreeDepth');

test('Leet code test case 1 pass', () => {
  expect(maxTreeDepth([3,9,20,null,null,15,7])).toBe(3);
})

test('Expect it to return 0 when there are no nodes', () =>{
  expect(maxTreeDepth([])).toBe(0);
})