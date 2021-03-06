// @flow

import {findByGauge, findNext, findPrevious, data, formatStringGauge} from '../kalium_strings';
import {getTension} from '../tension.js';
import {Note} from '../Note.js';
import {roundTo} from '../utils.js';
import leftPad from 'left-pad';

(test: any).each([0.059, 0.11, 0.114])('finds %p string', gauge => {
  expect(findByGauge(gauge)).toHaveProperty('gauge', gauge);
  expect(findByGauge(gauge)).toHaveProperty('unitWeight');
});

(test: any).each([0.0333, 0.33, 0, 1])('doesnt find %p string', gauge => {
  expect(() => findByGauge(gauge)).toThrow(/gauge/);
});

test('string search', () => {
  let result = [];
  for (const string of data) {
    const prev = findPrevious(string);
    const next = findNext(string);

    const current = leftPad(formatStringGauge(string), 7);
    const pg = prev ? leftPad(formatStringGauge(prev), 8) : leftPad('NONE', 8);
    const ng = next ? leftPad(formatStringGauge(next), 8) : leftPad('NONE', 8);
    result.push(`string: ${current} | prev: ${pg} | next: ${ng}`);
  }
  expect(result).toMatchSnapshot();
});

test('snapshot all tensions for a freq', () => {
  const note = Note.fromScientific('A3');
  expect(
    data.map(({gauge, unitWeight}) => {
      const tension = getTension({unitWeight, scale: 25.5, freq: note.freq()});
      return `gauge: ${leftPad(gauge, 10)} | tension: ${leftPad(roundTo(tension, 2), 10)}`;
    }),
  ).toMatchSnapshot();
});
