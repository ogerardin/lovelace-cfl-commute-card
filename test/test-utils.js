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

test('removes last point when it matches destination', () => {
  const result = filterOriginCallingPoint(
    ['Mersch', 'Ettelbruck', 'Diekirch'],
    'Luxembourg',
    'Diekirch'
  )
  assert.deepEqual(result, ['Mersch', 'Ettelbruck'])
})

test('removes both origin and destination when both match', () => {
  const result = filterOriginCallingPoint(
    ['Luxembourg', 'Mersch', 'Ettelbruck', 'Diekirch'],
    'Luxembourg',
    'Diekirch'
  )
  assert.deepEqual(result, ['Mersch', 'Ettelbruck'])
})

test('keeps last point when it differs from destination', () => {
  const result = filterOriginCallingPoint(
    ['Mersch', 'Ettelbruck'],
    'Luxembourg',
    'Diekirch'
  )
  assert.deepEqual(result, ['Mersch', 'Ettelbruck'])
})

test('handles case-insensitive destination match', () => {
  const result = filterOriginCallingPoint(
    ['Mersch', 'diekirch'],
    'Luxembourg',
    'Diekirch'
  )
  assert.deepEqual(result, ['Mersch'])
})

test('returns empty when only point matches both origin and destination', () => {
  const result = filterOriginCallingPoint(
    ['Luxembourg'],
    'Luxembourg',
    'Ettelbruck'
  )
  assert.deepEqual(result, [])
})

test('removes destination when only last point matches (no origin match)', () => {
  const result = filterOriginCallingPoint(
    ['Mersch', 'Ettelbruck', 'Diekirch'],
    'Luxembourg',
    'Diekirch'
  )
  assert.deepEqual(result, ['Mersch', 'Ettelbruck'])
})

test('destination filtering with whitespace differences', () => {
  const result = filterOriginCallingPoint(
    ['Mersch', ' Diekirch '],
    'Luxembourg',
    'Diekirch'
  )
  assert.deepEqual(result, ['Mersch'])
})

test('no destination passed skips destination filtering', () => {
  const result = filterOriginCallingPoint(
    ['Mersch', 'Ettelbruck', 'Diekirch'],
    'Luxembourg'
  )
  assert.deepEqual(result, ['Mersch', 'Ettelbruck', 'Diekirch'])
})

console.log(`\n${passed} passed, ${failed} failed`)
process.exit(failed > 0 ? 1 : 0)
