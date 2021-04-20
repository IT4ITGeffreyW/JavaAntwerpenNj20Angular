import {Component, OnInit} from '@angular/core';
import {Message} from '../core/models/message.model';
import {MessageService} from '../core/services/message.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Message[] = [];
  selectedMessageIndex: number = 0;

  showMessages = true;

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

}
