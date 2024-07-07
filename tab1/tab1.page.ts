import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  display = '';
  expression = '';

  constructor() {}

  onNumberClick(number: string) {
    this.expression += number;
    this.updateDisplay();
  }

  onOperatorClick(operator: string) {
    if (this.expression && !this.isLastCharacterOperator()) {
      this.expression += operator;
      this.updateDisplay();
    }
  }

  onEqualsClick() {
    if (this.expression && !this.isLastCharacterOperator()) {
      try {
        const result = eval(this.expression); 
        this.display = result.toString();
        this.expression = this.display;
      } catch (error) {
        this.display = 'Error';
      }
    }
  }

  onClearClick() {
    this.display = '';
    this.expression = '';
  }

  updateDisplay() {
    this.display = this.expression;
  }

  isLastCharacterOperator(): boolean {
    const lastChar = this.expression.slice(-1);
    return ['+', '-', '*', '/'].includes(lastChar);
  }
}
