import { Component, OnInit } from '@angular/core';
import {TicketService, TiketList2 } from '../ticket.service';

import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { NgbCheckBox } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  TicketsList: any = []
  MasterSelected : boolean = true
  PaginationConfig : any;
    Query : any;
  Pg :any;
  Filter: any;

  //status
  Data2:any;
  
  constructor(
    private Service1 : TicketService) { 

      this.PaginationConfig = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: 0
      };
    
      this.Query = {
        size: this.PaginationConfig.itemsPerPage,
        pageNo: this.PaginationConfig.currentPage
      }

      this.Pg = {
        size: this.PaginationConfig.itemsPerPage,
        pageNo: this.PaginationConfig.currentPage
      }

      this.Filter = {
        id: '',
        kode: '',
        prioritas: '',
        status: '',
        kategori: '',
        user_id : '',
        query: '',
      }
    }

  pageChanged(event: any){
    this.PaginationConfig.currentPage = event;
    this.Pg.pageNo = this.PaginationConfig.currentPage
    this.fetchList1()
  }

  changeTab(tab:any){
    
  }

  switchStatus(data:any){
    this.Filter.status = data;
    console.log('hoho', data)
    this.fetchList1()
  }

  fetchData2(){
    return this.Service1.getStatuses({}).subscribe((data: {}) => {
      this.Data2 = data;
      console.log(this.Data2)
      
  })
  }

  
  model: any = []
  

 ngOnInit() {
     this.fetchList1()
     this.fetchData2()
     
  }

fetchList1(){
  return this.Service1.getTikets(this.Pg, this.Filter).subscribe((data: {}) => {
    this.TicketsList = data;
    for (let i=0; i<this.TicketsList.data.length; i++){
      this.TicketsList.data[i].isSelected = false
    }
    this.PaginationConfig.totalItems = this.TicketsList.total_data
})
}

  printModel(model:any){
    console.log(model)
  }

  printM(e:NgbCheckBox){
    console.log(e.checked)
  }

  checkUncheckAll(){
    for (let i=0; i<this.TicketsList.data.length; i++){
      this.TicketsList.data[i].isSelected = this.MasterSelected
    }
  }



  

}