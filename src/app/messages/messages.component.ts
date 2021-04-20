import {Component, OnInit} from '@angular/core';
import {Message} from '../core/models/message.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Message[] = [
    {
      id: 1,
      title: 'My First Message',
      body: 'My First Message body that I don\'t know what',
      img: 'assets/img/me.jpg'
    },
    {
      id: 2,
      title: 'My Second Message',
      body: 'My Second Message body that I don\'t know what',
      img: 'assets/img/me.jpg'
    },
    {
      id: 3,
      title: 'My Third Message',
      body: 'My Third Message body that I don\'t know what',
      img: 'assets/img/me.jpg'
    }
  ];

  selectedMessageIndex: number = 0;

  showMessages = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  setSelected(id: number): void {
    this.selectedMessageIndex = id;
  }

  toggleShowMessages(): void {
    this.showMessages = !this.showMessages;
  }

}
