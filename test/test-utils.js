import { strict as assert } from 'node:assert'
import { filterOriginCallingPoint } from '../src/utils.js'

let passed = 0
let failed = 0

function test(name, fn) {
  try {
    fn()
    passed++
    console.log(`  ✓ ${name}`)
  } catch (e) {
    failed++
    console.log(`  ✗ ${name}: ${e.message}`)
  }
}

console.log('filterOriginCallingPoint\n')

test('removes first point when it matches origin', () => {
  const result = filterOriginCallingPoint(
    ['Luxembourg', 'Mersch', 'Ettelbruck'],
    'Luxembourg'
  )
  assert.deepEqual(result, ['Mersch', 'Ettelbruck'])
})

test('keeps first point when it differs from origin', () => {
  const result = filterOriginCallingPoint(
    ['Mersch', 'Ettelbruck', 'Diekirch'],
    'Luxembourg'
  )
  assert.deepEqual(result, ['Mersch', 'Ettelbruck', 'Diekirch'])
})

test('handles case-insensitive match', () => {
  const result = filterOriginCallingPoint(
    ['luxembourg', 'Mersch'],
    'Luxembourg'
  )
  assert.deepEqual(result, ['Mersch'])
})

test('handles whitespace differences', () => {
  const result = filterOriginCallingPoint(
    [' Luxembourg ', 'Mersch'],
    'Luxembourg'
  )
  assert.deepEqual(result, ['Mersch'])
})

test('returns empty array when only point matches origin', () => {
  const result = filterOriginCallingPoint(
    ['Luxembourg'],
    'Luxembourg'
  )
  assert.deepEqual(result, [])
})

test('returns unchanged when points is empty', () => {
  const result = filterOriginCallingPoint([], 'Luxembourg')
  assert.deepEqual(result, [])
})

test('returns points as-is when origin is empty', () => {
  const result = filterOriginCallingPoint(
    ['Luxembourg', 'Mersch'],
    ''
  )
  assert.deepEqual(result, ['Luxembourg', 'Mersch'])
})

test('returns undefined when points is undefined', () => {
  const result = filterOriginCallingPoint(undefined, 'Luxembourg')
  assert.equal(result, undefined)
})

test('returns null when points is null', () => {
  const result = filterOriginCallingPoint(null, 'Luxembourg')
  assert.equal(result, null)
})

console.log(`\n${passed} passed, ${failed} failed`)
process.exit(failed > 0 ? 1 : 0)
