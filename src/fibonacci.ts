import _ from 'lodash';

// Оптимизированная реализация получения числа Фибоначчи с использованием lodash.memoize
export function fibonacciMemoized(n: number): number {
  const getFibonacci = _.memoize((num: number): number => {
    if (num <= 1) return num;
    return getFibonacci(num - 1) + getFibonacci(num - 2);
  });

  return getFibonacci(n);
}