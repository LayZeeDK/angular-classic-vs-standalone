import { Component } from '@angular/core';

import { MessageService } from './message.service';

@Component({
  selector: 'toh-messages',
  styles: [
    `
      h2 {
        color: #a80000;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: lighter;
      }

      .clear {
        color: #333;
        background-color: #eee;
        margin-bottom: 12px;
        padding: 1rem;
        border-radius: 4px;
        font-size: 1rem;
      }
      .clear:hover {
        color: #fff;
        background-color: #42545c;
      }
    `,
  ],
  template: `
    <div *ngIf="messageService.messages.length">
      <h2>Messages</h2>
      <button type="button" class="clear" (click)="messageService.clear()">
        Clear messages
      </button>
      <div *ngFor="let message of messageService.messages">{{ message }}</div>
    </div>
  `,
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
