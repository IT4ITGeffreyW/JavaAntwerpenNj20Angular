import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from '../core/services/message.service';
import {Message} from '../core/models/message.model';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css']
})
export class MessageDetailsComponent implements OnInit {

  message: Message = new Message();

  constructor(private route: ActivatedRoute,
              private messageService: MessageService) { }

  ngOnInit(): void {
    const messageId = +this.route.snapshot.queryParams.id;
    this.message = this.messageService.getMessage(messageId);
  }

}
