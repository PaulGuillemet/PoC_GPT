import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { TalkComponent } from './pages/talk/talk.component';
import { SharedModule } from '../shared/shared.module';
import { MessageComponent } from './pages/talk/message/message.component';

@NgModule({
  declarations: [TalkComponent, MessageComponent],
  imports: [CommonModule, ChatRoutingModule, SharedModule],
})
export class ChatModule {}
