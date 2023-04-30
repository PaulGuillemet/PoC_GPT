import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalkComponent } from './pages/talk/talk.component';

const routes: Routes = [
  {
    path: 'talk',
    component: TalkComponent,
    children: [],
  },
  { path: '**', redirectTo: 'talk' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
