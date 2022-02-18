import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TraceModel } from '../models/trace.model';
import { HttpHeaders } from '@angular/common/http';
import { delay, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PollModel } from '../models/poll.model';
import { SelectModel } from '../models/select.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private urlTrace = 'v1/Trace';
  private urlPoll = 'v1/ActivationRequest/Poll';
  private urlProducts = 'v1/ActivationRequest/Products';
  private urlSalesAmount = 'v1/ActivationRequest/SalesAmount';
  private baseURL: string = environment.apiBackEnd;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'ApiKey': environment.apiBackEndKey
    })
  };

  
  constructor(private http: HttpClient) { }

  postTrace(trace: TraceModel): Observable<any>  {    
    const body=JSON.stringify(trace);
    return this.http.post(`${ this.baseURL + this.urlTrace }`, body, this.httpOptions);
  }

  postPoll(poll: PollModel): Observable<any>  {
    const body=JSON.stringify(poll);
    return this.http.post(`${ this.baseURL + this.urlPoll }`, body, this.httpOptions);
  }

  getProducts() {    
    return this.http.get(`${ this.baseURL + this.urlProducts }`,this.httpOptions)
            .pipe(
              map( this.createArray ),
              delay(0)
            );
  }

  getSalesAmount() {
    return this.http.get(`${ this.baseURL + this.urlSalesAmount }`,this.httpOptions)
            .pipe(
              map( this.createArray ),
              delay(0)
            );
  }

  private createArray( selectObj: object ) {

    const options: SelectModel[] = [];    
    Object.keys( selectObj ).forEach( key => {            

      const option: SelectModel = selectObj[key];

      options.push( option );
    });


    return options;

  }
}
