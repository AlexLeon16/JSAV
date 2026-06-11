const solveEquation = require('./solveEquation.js');

// Тесты
console.log('Тест 1 (два корня):', solveEquation(1, -3, 2)); // [2, 1]
console.log('Тест 2 (один корень):', solveEquation(1, 2, 1)); // [-1]
console.log('Тест 3 (нет корней):', solveEquation(1, 2, 3)); // []
console.log('Тест 4 (два корня):', solveEquation(2, 5, 2)); // [-0.5, -2]