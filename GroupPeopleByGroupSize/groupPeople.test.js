const groupPeople = require('./groupPeople')

test('LeetCode base case 1', () => {
  expect(groupPeople([3,3,3,3,3,1,3])).toMatchObject([[5],[0,1,2],[3,4,6]])
})

test('LeetCode base case 2', () => {
  expect(groupPeople([2,1,3,3,3,2])).toMatchObject([[1],[0,5],[2,3,4]])
})
