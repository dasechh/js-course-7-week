import _ from 'lodash';

// Классическая рекурсивная реализация получения числа Фибоначчи
export function fibonacciRecursive(n: number): number {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Оптимизированная реализация получения числа Фибоначчи с использованием lodash.memoize
export function fibonacciMemoized(n: number): number {
  const getFibonacci = _.memoize((num: number): number => {
    if (num <= 1) return num;
    return getFibonacci(num - 1) + getFibonacci(num - 2);
  });

  return getFibonacci(n);
}