import { Component, OnInit } from '@angular/core';
import {TicketService, TiketList2 } from '../ticket.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Credentials, CredentialsService } from '../../../core/authentication/credentials.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForms : FormGroup;
  Data1:any;
  Data2:any;
  Data3:any;
  Data4:any;
  constructor(private cd: CredentialsService,private fb: FormBuilder, private Service1: TicketService) {
    this.initForm1()
   }

  ngOnInit() {
    this.fetchData2()
    this.fetchData3()
  }

  initForm1(){
    this.createForms = this.fb.group({
      isi: [],
      id_pembuat:[this.cd.credentials._id],
      prioritas:[],
      judul:[],
      kategori:[]

    })
  }

  submitForm1(){
    return this.Service1.addTicket(this.createForms.value).subscribe((data: {}) => {
      this.Data1 = data;
      console.log('ini data 1')
      console.log(this.Data1)
      
      this.createForms.reset()
      
  })
  }

  fetchData2(){
    return this.Service1.getCategories({}).subscribe((data: {}) => {
      this.Data2 = data;
      console.log('ini data 2')
      console.log(this.Data2)
      
  })
  }

  fetchData3(){
    return this.Service1.getPriorities({}).subscribe((data: {}) => {
      this.Data3 = data;
      console.log('ini data 3')
      console.log(this.Data3)
      
  })
  }

  

}
