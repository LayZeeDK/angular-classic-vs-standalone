import { Component } from '@angular/core';
import { ParentComponent } from './parent-child/parent.component';

@Component({
  imports: [ParentComponent],
  selector: 'app-root',
  standalone: true,
  template: `
    <p>AppComponent</p>
    <app-parent></app-parent>
  `,
})
export class AppComponent {}
