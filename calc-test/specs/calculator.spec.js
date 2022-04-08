import calculator from '../src/calculator';
describe('Calculator 100% coverage', () => {
  test('it loads without error', () => {
    expect(calculator).toBeDefined();
    expect(typeof calculator).toBe('function');
  });
  test ('6 + 8 = 14', () => {
    expect(calculator(6, '+', 8)).toBe(14)
  });
  test ('6 - 8 = -2', () => {
    expect(calculator(6, '-', 8)).toBe(-2)
  });
  test ('6 * 8 = 48', () => {
    expect(calculator(6, '*', 8)).toBe(48)
  });
  test ('48 / 8 = 6', () => {
    expect(calculator(48, '/', 8)).toBe(6)
  });
  test('throw error if operand A is not a number', () => {
    expect(() => calculator('?', '*', 8)).toThrow();
  });
  test('throw error if operand B is not a number', () => {
    expect(() => calculator(6, '*', '?')).toThrow();
  });
  test('throw error if operator is not valid', () => {
    expect(() => calculator(6, '?', 8)).toThrow();
  });
  test.each`
    a       | op     | b       | expected
    ${6}    | ${'*'} | ${8}    | ${48}
    ${48}   | ${'/'} | ${8}    | ${6}
    ${6}    | ${'+'} | ${8}    | ${14}
    ${6}    | ${'-'} | ${8}    | ${-2}
    ${6}    | ${'&'} | ${8}    | ${'error'}
    ${'aa'} | ${'+'} | ${8}    | ${'error'}
    ${6}    | ${'+'} | ${'aa'} | ${'error'}
  `('$a $op $b = $expected', ({ a, op, b, expected }) => {
    if (expected === 'error') {
      expect(() => calculator(a, op, b)).toThrow();
    } else {
      expect(calculator(a, op, b)).toBe(expected);
    }
  });
});
