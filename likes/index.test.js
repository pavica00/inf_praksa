const likes = require('.')

test('Test 1', () => {
  expect(likes([])).toBe('no one likes this')
})

test('Test 2', () => {
  expect(likes(['Petar'])).toBe('Petar likes this')
})

test('Test 3', () => {
  expect(likes(['Pero', 'Ivan'])).toBe('Pero and Ivan like this')
})

test('Test 4', () => {
  expect(likes(['Robert', 'Marija', 'Marko'])).toBe('Robert, Marija and Marko like this')
})

test('Test 5', () => {
  expect(likes(['Ivan', 'Pero', 'Marko', 'Robert'])).toBe(
    'Ivan, Pero and 2 others like this'
  )
})
