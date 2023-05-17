import { describe, expect, test } from 'vitest'
import { machineDate, readableDate, parseRFC2822, parseRFC3339, parseYear } from 'src/utils/getFormattedDate'

describe('dateFormat', () => {
  test('machineDate( ISO 8601 )', () => {
    expect(machineDate('2000-01-01')).toBe('2000-01-01T00:00:00.000Z')
  })

  test('readableDate( Dec 31, 1999 )', () => {
    expect(readableDate('1999-12-31')).toBe('Dec 31, 1999')
  })

  // ? build結果：Wed, 19 Apr 2023 14:29:00 GMT
  test('RFC2822', () => {
    expect(parseRFC2822('2023-04-19 06:29')).toBe('Wed, 19 Apr 2023 06:29:00 GMT+8')
  })

  // ? build結果：2023-04-19T22:29:00+08:00
  test('RFC3339', () => {
    expect(parseRFC3339('2023-04-19 06:29')).toBe('2023-04-19T06:29:00+08:00')
  })

  test('YEAR', () => {
    expect(parseYear()).toBe('2023')
  })
})
