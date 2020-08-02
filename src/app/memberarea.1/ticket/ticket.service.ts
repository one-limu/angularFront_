import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

export interface TiketContext {
  id: number;
  kode: string;
  prioritas: number;
  kategori: number;
  query: string;
}

export interface TiketList {
  id: number;
  kode: string;
  judul: string;
  isi: string;
  prioritas: number;
  kategori: number;
}

export class TiketList2 {
  id: number;
  kode: string;
  judul: string;
  isi: string;
  prioritas: number;
  kategori: number;
  balasan: [];
  assignee:number;
}

export class StatusList {
  id: number;
  nama: string;
  id_pembuat: string;

}

export class KomenList {
  id: number;
  nama: string;
  id_pembuat: string;

}

export class Assignee {
  id: number;
  nama: string;
  username: string;

}


@Injectable({
  providedIn: 'root'
})

export class TicketService {
   API_SERVER = 'http://localhost:4000';
  constructor(
    private http: HttpClient
    ){}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */

getd(context: TiketContext): Observable<TiketList> {
    
    //console.log(context)
    
    return this.http.get(`${this.API_SERVER}/tiket?size=10&pageNo=1`).pipe(
      map((body: any) => body.value),
      catchError(() => of('Error, could not load joke :-('))
    );

    //return this.http.get<Tiket[]>(`${config.apiUrl}/tiket`)
  }

  getTikets(pg:any,filter:any): Observable<TiketList2> {

   var assignee = filter.assignee
   if(!assignee){assignee = ''}
  
    var  params = new  HttpParams()
          .set('size', pg.size)
          .set('pageNo', pg.pageNo)
          .set('status', filter.status)
          .set('user_id', filter.user_id)
          .set('isAdmin', '1')
          .set('assignee', assignee )
    
    return this.http.get<TiketList2>(this.API_SERVER + '/tiket', {params})
    .pipe(
      retry(1)
    )
  }

  getOneTicket(filter:any): Observable<TiketList2> {
    var  params = new  HttpParams()
          .set('t_code', filter.t_code)

    return this.http.get<TiketList2>(this.API_SERVER + '/tiket/code/' + filter.t_code, {})
    .pipe(
      retry(1)
    )
  }

  getStatuses(filter:any): Observable<StatusList> {
    var  params = new  HttpParams()
          
    return this.http.get<StatusList>(this.API_SERVER + '/manajementiket/status/' , {})
    .pipe(
      retry(1)
    )
  }

  getPriorities(filter:any): Observable<StatusList> {
    var  params = new  HttpParams()
          
    return this.http.get<StatusList>(this.API_SERVER + '/manajementiket/prioritas/' , {})
    .pipe(
      retry(1)
    )
  }

  getCategories(filter:any): Observable<StatusList> {
    var  params = new  HttpParams()
          
    return this.http.get<StatusList>(this.API_SERVER + '/manajementiket/kategori/' , {})
    .pipe(
      retry(1)
    )
  }
  

  getReply(filter:any): Observable<KomenList> {
    var  params = new  HttpParams()
          
    return this.http.get<KomenList>(this.API_SERVER + '/tiket/' + filter.kode + '/reply' , {})
    .pipe(
      retry(1)
    )
  }

  getAssignees(filter:any): Observable<Assignee> {
    var  params = new  HttpParams().set('isassignee', filter.isassignee )
          
    return this.http.get<Assignee>(this.API_SERVER + '/users' , {params})
    .pipe(
      retry(1)
    )
  }

//  addReply(data:any,kode:string): Observable<KomenList> {
//    return this.http.post<KomenList>(this.API_SERVER + '/tiket/' + kode + '/reply' , {})
//    .pipe(
//      retry(1)
 //   )
 // }

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // POST
  addReply(data:any,kode:any): Observable<KomenList> {
    return this.http.post<KomenList>(this.API_SERVER + '/tiket/' + kode + '/reply' , JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      
    )
  }  


  addTicket(data:any): Observable<TiketList2> {
    return this.http.post<TiketList2>(this.API_SERVER + '/tiket/buat' , JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      
    )
  }

  updateStatus(data:any, id:any): Observable<TiketList2> {
    var datad = {
      status : data.status
    }

    return this.http.put<TiketList2>(this.API_SERVER + '/tiket/' + id , JSON.stringify(datad), this.httpOptions)
    .pipe(
      retry(1),
      
    )
  }

  updateAssignee(data:any, id:any): Observable<TiketList2> {
   var datad = {
     assignee : data.assignee
   }


    return this.http.put<TiketList2>(this.API_SERVER + '/tiket/' + id , JSON.stringify(datad), this.httpOptions)
    .pipe(
      retry(1),
      
    )
  }

  

  

  

}



