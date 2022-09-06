import { Component } from '@angular/core';

@Component({
  selector: 'app-count',
  template: `
    <h1>{{ title }} 'Learning Angular' with {{ auth }}</h1>

    <h3>
      The base is: <strong> {{ base }} </strong>
    </h3>

    <button (click)="changed(base)">+ {{ base }}</button>

    <span>{{ number }}</span>

    <button (click)="changed(-base)">- {{ base }}</button>
  `,
})
export class CountComponent {
  title: string = 'Welcome to';
  auth: string = 'Rodrigo';
  number: number = 10;
  base: number = 5;
  // base: number = 5;

  changed(arg: number){
    this.number += arg;
  }
}
