import {Injectable} from '@angular/core';
import {Message} from '../models/message.model';
import {HttpClient} from '@angular/common/http';

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

  getMessage(id: number): Message {
    return this.messages.filter(m => m.id === id)[0];
  }

  addMessage(message: Message): void {
    message.id = this.messages.length + 1;
    message.img = 'assets/img/me.jpg';
    this.messages.push(message);
  }
}
