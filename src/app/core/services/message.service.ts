import {Injectable} from '@angular/core';
import {Message} from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages = [
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

  constructor() {
  }

  getMessages(): Message[] {
    return this.messages;
  }
}
