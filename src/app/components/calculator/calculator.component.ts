import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  currentOperand: string = '';
  previousOperand: string = '';
  currentOperation: string | null = null;

  appendNumber(number: string) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand += number;
  }

  chooseOperation(operation: string) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.currentOperation = operation;
    this.previousOperand = this.currentOperand + operation;
    this.currentOperand = '';
  }

  compute() {
    let result: number;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.currentOperation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = result.toString();
    this.currentOperation = null;
    this.previousOperand = '';
  }

 

  deleteNumber() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.currentOperation = null;
  }
}
