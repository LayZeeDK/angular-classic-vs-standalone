import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';

import { MessagesComponent } from './messages.component';

@Component({
  imports: [MessagesComponent, RouterOutlet, RouterLinkWithHref],
  selector: 'toh-app',
  standalone: true,
  styles: [
    `
      h1 {
        margin-bottom: 0;
      }
      nav a {
        padding: 1rem;
        text-decoration: none;
        margin-top: 10px;
        display: inline-block;
        background-color: #e8e8e8;
        color: #3d3d3d;
        border-radius: 4px;
      }
      nav a:hover {
        color: white;
        background-color: #42545c;
      }
      nav a.active {
        background-color: black;
      }
    `,
  ],
  template: `
    <h1>{{ title }}</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    <toh-messages></toh-messages>
  `,
})
export class AppComponent {
  title = 'Tour of Heroes';
}
