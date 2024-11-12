export function measureTime(fibFunc: (n: number) => number, n: number): number {
    const start = performance.now();
    fibFunc(n);
    const end = performance.now();
    return end - start;
  }