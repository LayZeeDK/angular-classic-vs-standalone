import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <p>ParentComponent</p>
    <app-child></app-child>
  `,
})
export class ParentComponent {}
