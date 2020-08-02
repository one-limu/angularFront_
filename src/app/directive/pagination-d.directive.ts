import { Directive, Input} from '@angular/core';

@Directive({
  selector: '[appPaginationD]'
})
export class PaginationDDirective {

  constructor() { }
  @Input() currentPage : string;
  @Input() dataPerPage : string;
  @Input() totalData : string;


}
