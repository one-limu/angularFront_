import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-memberarea',
  templateUrl: './memberarea.component.html',
  styleUrls: ['./memberarea.component.css']
})
export class MemberareaComponent implements OnInit {
  searchForm : FormGroup;

  constructor(
    private formbuilder: FormBuilder
    
    ){}

  ngOnInit() {
    this.searchForm = this.formbuilder.group({
            
    })
  }

}
