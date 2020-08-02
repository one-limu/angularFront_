import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TicketComponent } from './ticket.component';
import { OpenComponent } from './open/open.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [TicketComponent, OpenComponent, ListComponent, CreateComponent],
  imports: [
    CommonModule,RouterModule,FormsModule,NgbModule,ReactiveFormsModule,NgxPaginationModule
  ]
})
export class TicketModule { }
