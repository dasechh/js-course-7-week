import { fibonacciRecursive, fibonacciMemoized } from './fibonacci';
import { measureTime } from './performance';

// Анализ и вывод результатов
const performAnalysis = () => {
  const inputElement = document.getElementById("inputN") as HTMLInputElement;
  const n = parseInt(inputElement.value);
  if (isNaN(n) || n < 0) {
    displayOutput("Введите корректное целое число больше 0.");
    return;
  }
  
  const recursiveTime = measureTime(fibonacciRecursive, n);
  const memoizedTime = measureTime(fibonacciMemoized, n);
  
  const outputMessage = `
    Результаты для n = ${n}:<br>
    Рекурсивный метод: ${recursiveTime} мс<br>
    Мемоизированный метод: ${memoizedTime} мс
  `;
  
  displayOutput(outputMessage);
};

function displayOutput(message: string) {
  const outputElement = document.getElementById("result") as HTMLParagraphElement;
  outputElement.innerHTML = message;
}

const buttonElement = document.getElementById("button");
buttonElement?.addEventListener("click", performAnalysis);