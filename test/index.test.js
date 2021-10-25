const calculate = require('../fibonacci');
const { perf } = require('../helper');

describe('positive test', () => {
  test('p.t.0', () => {
    expect(calculate(0)).toEqual(0);
  });
  test('p.t.1', () => {
    expect(calculate(1)).toEqual(1);
  });
  test('p.t.10', () => {
    expect(calculate(10)).toEqual(55);
  });
});

describe('negative test', () => {
  test('n.t.str', () => {
    expect(() => {
      calculate('qwerety');
    }).toThrow();
  });
  test('n.t.bool', () => {
    expect(() => {
      calculate(true);
    }).toThrow();
  });
  test('n.t.float', () => {
    expect(() => {
      calculate(123.43);
    }).toThrow();
  });
})

describe('perf test', () => {
    test('p.t 1', () => {
      expect(perf('fib(1)', calculate, [1])).toBeDefined();
    });
    test('p.t 10', () => {
      expect(perf('fib(20)', calculate, [20])).toBeDefined();
    });
    test('p.t 20', () => {
      expect(perf('fib(25)', calculate, [25])).toBeDefined();
    });
})

describe('hard perf test', () => {
  test('p.t 10', () => {
    expect(perf('fib(10)', calculate, [10])).toBeDefined();
  });
  test('p.t 100', () => {
    expect(perf('fib(100)', calculate, [100])).toBeDefined();
  });
  test('p.t 10000', () => {
    expect(perf('fib(10000)', calculate, [10000])).toBeDefined();
  });
})
