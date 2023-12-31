import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

    <h2>Counter: {{counter}}</h2>
    <button (click)="increaseBy()">+1</button>
    <button (click)="decreaseBy()">-1</button>
    <button (click)="resetCounter()">reset</button>

  `,
})
export class CounterComponent {

  public counter: number = 10;







  increaseBy(): void {
    this.counter += 1;
  }

  decreaseBy(): void {
    this.counter -= 1;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
