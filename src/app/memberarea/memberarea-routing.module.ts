import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberareaComponent } from './memberarea.component';
import { Shell } from '@app/shell/shell.service';
import { TicketComponent } from './ticket/ticket.component';
import { ListComponent } from './ticket/list/list.component';
import { CreateComponent } from './ticket/create/create.component';
import { OpenComponent } from './ticket/open/open.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'memberarea', component: MemberareaComponent, children: [
      {
        path: 'ticket', component: TicketComponent, children:[
          {
            path : 'list', component: ListComponent
          },
          {
            path : 'create', component: CreateComponent
          },
          {
            path : 'check/:id', component: OpenComponent
          }
        ]
      },
    ]}
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MemberareaRoutingModule { }
