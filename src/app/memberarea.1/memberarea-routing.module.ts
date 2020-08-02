import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberareaComponent } from './memberarea.component';
import { Shell } from '@app/shell.1/shell.service';
import { TicketComponent } from './ticket/ticket.component';
import { ListComponent } from './ticket/list/list.component';
import { ListComponent1 } from './ticket/list.1/list.component';
import { CreateComponent } from './ticket/create/create.component';
import { OpenComponent } from './ticket/open/open.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'admin', component: MemberareaComponent, children: [
      {
        path: 'ticket', component: TicketComponent, children:[
          {
            path : 'list', component: ListComponent
          },
          {
            path : 'myticket', component: ListComponent1
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
export class MemberareaRoutingModule1 { }
