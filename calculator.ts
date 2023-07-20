class Calculator {
  
    add(a: number, b: number): number {
      return a + b;
    }
  
    subtract(a: number, b: number): number {
      return a - b;
    }
  
    multiply(a: number, b: number): number {
      return a * b;
    }
  
    divide(a: number, b: number): number {
      if (b === 0) {
        throw new Error("Division by zero is not allowed!");
      }
      return a / b;
    }
  }
  
  // Example usage
  const calculator = new Calculator();
  
  console.log(calculator.add(5, 3));       
  
  console.log(calculator.subtract(7, 2));  
  console.log(calculator.multiply(4, 6));  
  console.log(calculator.divide(10, 2));   
  
  