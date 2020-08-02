import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MemberareaComponent } from './memberarea.component';
import { MemberareaRoutingModule1 } from './memberarea-routing.module';
import { TicketModule } from './ticket/ticket.module';




@NgModule({
  declarations: [MemberareaComponent, ],
  imports: [
    CommonModule, MemberareaRoutingModule1, TicketModule, RouterModule
  ]
})
export class MemberareaModule1 { }
