import { Component, OnInit } from '@angular/core';
import { ChatFrService } from 'src/app/core/services/chat-fr.service';
import {
  Message,
  MessageOriginEnum,
} from 'src/app/modules/shared/model/message';

import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss'],
})
export class TalkComponent implements OnInit {
  public value: string = '';
  public messages: Message[] = [];
  constructor(public chatService: ChatFrService) {}
  ngOnInit(): void {}
  public onInput(e: any) {
    if (e.key == 'Enter') {
      this.sendText(this.value);
      this.value = '';
      e.preventDefault();
      e.stopPropagation();
    }
  }

  public async sendText(txt: string) {
    console.log('sending: ' + txt);
    this.messages.push({ origin: MessageOriginEnum.USER, text: txt });
    const response = await this.chatService.process(txt);
    this.messages.push({
      origin: MessageOriginEnum.BOT,
      text: response,
    });
  }
}
