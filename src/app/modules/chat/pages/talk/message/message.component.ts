import { Component, Input } from '@angular/core';
import { Message } from 'src/app/modules/shared/model/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  host: { '[class.bot]': 'message.origin == "BOT"' },
})
export class MessageComponent {
  @Input() message!: Message;
}
