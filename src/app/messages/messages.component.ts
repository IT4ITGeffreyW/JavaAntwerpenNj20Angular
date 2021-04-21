import {Component, OnInit} from '@angular/core';
import {Message} from '../core/models/message.model';
import {MessageService} from '../core/services/message.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Message[] = [];
  selectedMessageIndex: number = 0;

  showMessages = true;

  newMessage = new Message();

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
  }

  setSelected(id: number): void {
    this.selectedMessageIndex = id;
  }

  toggleShowMessages(): void {
    this.showMessages = !this.showMessages;
  }

  addMessage(form: NgForm): void {
    if (form.valid) {
      console.log('Form is valid, lets save:', this.newMessage);
      this.messageService.addMessage(this.newMessage);
      this.newMessage = new Message();
    }
  }

}
