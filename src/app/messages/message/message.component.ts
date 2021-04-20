import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from '../../core/models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: Message = new Message();
  @Input() selected: boolean = false;

  @Output() isSelected: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  select(): void {
    this.isSelected.emit();
  }

}
