/**
 * Функция выполняет операцию над двумя операндами
 * @param {number} operandA 
 * @param {string} operation 
 * @param {number} operandB 
 */
export default function calculator(operandA, operation, operandB) {
  if (isNaN(operandA)) {
    throw new Error('Operand A is not a number');
  }
  if (isNaN(operandB)) {
    throw new Error('Operand B is not a number');
  }
  switch (operation) {
    case '+':
      return operandA + operandB;
    case '-':
      return operandA - operandB;
    case '*':
      return operandA * operandB;
    case '/':
      return operandA / operandB;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
}
