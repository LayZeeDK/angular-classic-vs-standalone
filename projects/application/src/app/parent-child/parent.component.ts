import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  imports: [ChildComponent],
  selector: 'app-parent',
  standalone: true,
  template: `
    <p>ParentComponent</p>
    <app-child></app-child>
  `,
})
export class ParentComponent {}
