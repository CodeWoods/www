import { describe, expect, test } from 'vitest';
import { getFormattedDate } from './getFormattedDate';

describe('dateFormat', () => {
  test('1999-12-31', () => {
    expect(getFormattedDate('1999-12-31')).toBe('Dec 31, 1999');
  });

  test('2000-01-01', () => {
    expect(getFormattedDate('2000-01-01')).toBe('Jan 01, 2000');
  });
});
