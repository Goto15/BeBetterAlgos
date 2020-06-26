const shuffleArray = require('./shuffleArray');

test('Leetcode base case 1 pass', () => {
  expect(shuffleArray([2,5,1,3,4,7], 3)).toMatchObject([2,3,5,4,1,7])
})

test('Leetcode base case 2 pass', () => {
  expect(shuffleArray([1,2,3,4,4,3,2,1], 4)).toMatchObject([1,4,2,3,3,2,4,1])
})

test('Leetcode base case 3 pass', () => {
  expect(shuffleArray([1,1,2,2], 2)).toMatchObject([1,2,1,2])
})
