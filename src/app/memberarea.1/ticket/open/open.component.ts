import { Component, OnInit } from '@angular/core';
import { TicketService, TiketList2 } from '../ticket.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.scss']
})
export class OpenComponent implements OnInit {
  //Tiket
  Data1 : any;
  Filter1 : any;
  //Status
  Data2: any;
  SelectedStatus: any;

  //komen
  Data3: any;
  komenForms: FormGroup;

  dateNow: any;


  Data4:any;
  SelectedAssignee: any;



  constructor(private Service1 : TicketService,private route: ActivatedRoute, private fb: FormBuilder) {
    this.Filter1 = {
      t_code : this.route.snapshot.params.id
    }
    this.initForm1()
    this.fetchData1()
    this.fetchData2()
    this.fetchData3()
    this.fetchData4()
    //this.Data1 = []
    this.dateNow = new Date()
    
    

   // console.log(this.route.snapshot.params.id)
   }

  ngOnInit() {
  
    this.fetchData1()
    
  }

  fetchData1(){
    return this.Service1.getOneTicket(this.Filter1).subscribe((data: {}) => {
      this.Data1 = data;
      this.Data1.batas_waktu = new Date(this.Data1.batas_waktu)
      console.log('ini data 1')
      console.log(this.Data1)
      
  })
  }

  fetchData2(){
    return this.Service1.getStatuses({}).subscribe((data: {}) => {
      this.Data2 = data;
      console.log('ini data 2')
      console.log(this.Data2)
      
  })
  }

  changeStatus(data:any){
    this.SelectedStatus = data
    var a = this.Data1
    a.status = data
    console.log(this.SelectedStatus)
    return this.Service1.updateStatus(a, a.kode).subscribe((data: {}) => {
      this.fetchData1()
    })

  

  }

  changeAssignee(data:any){
    this.SelectedAssignee = data
    var a = this.Data1
    a.assignee = data
    console.log(this.SelectedAssignee)
    return this.Service1.updateAssignee(a, a.kode).subscribe((data: {}) => {
      this.fetchData1()
    })

  

  }





  fetchData3(){
    return this.Service1.getReply({kode: this.Filter1.t_code}).subscribe((data: {}) => {
      this.Data3 = data;
      
      console.log('ini data 3')
      console.log(this.Data3)
      
  })
  }

  fetchData4(){
    return this.Service1.getAssignees({isassignee: true}).subscribe((data: {}) => {
      this.Data4 = data;
      
      console.log('ini data 4')
      console.log(this.Data3)
      
  })
  }


  initForm1(){
    this.komenForms = this.fb.group({
      isi: ['']
    })
  }

  submitForm1(){
    console.log(this.komenForms.value)
    return this.Service1.addReply(this.komenForms.value,this.Filter1.t_code).subscribe((data: {}) => {
      this.Data3 = data;
      console.log('ini data 3')
      console.log(this.Data3)
      this.fetchData1()
      this.komenForms.reset()
      
  })
  }
  kk() {
    console.log('kk')
  }

}
