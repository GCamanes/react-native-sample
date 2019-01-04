import { sum, sumAsynchrone } from '../math.helper';

describe('Jest samples synchrone', () => {
  it('should sum be valid', () => {
    expect(sum(15, 5)).toBe(20);
  });

  it('should sum not be valid', () => {
    expect(sum(15, 5)).not.toBe(30);
  });

  it('should sum arguments not to be a number', () => {
    expect(() => sum('Hello', 5)).toThrowError('Arguments must be number');
  });
});

describe('Jest samples asynchrone', () => {
  it('should sum be valid', () => expect(sumAsynchrone(15, 5)).resolves.toBe(20));

  it('should sum not be valid', () => expect(sumAsynchrone(15, 5)).resolves.not.toBe(30));

  it('should sum arguments not to be a number', () => expect(() => sumAsynchrone('Hello', 5)).toThrowError('Arguments must be number'));
});
