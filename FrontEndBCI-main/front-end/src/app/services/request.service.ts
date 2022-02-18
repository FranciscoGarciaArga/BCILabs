import { Injectable } from '@angular/core';
import { CompanyModel } from '../models/company.model';
import { ClientModel } from '../models/client.model';
import { RequestModel } from '../models/request.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private urlRequest = 'v1/ActivationRequest';
  private baseURL: string = environment.apiBackEnd;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'ApiKey': environment.apiBackEndKey
    })
  };


  request: RequestModel = new RequestModel();  
  constructor(private http: HttpClient) { }

  addPersonal(client: ClientModel){
    this.request.client = client;
  }

  addCompany(company: CompanyModel){    
    this.request.company = company;
  }

  getRequest() {
    return this.request;
  }

  getRequestId() {
    return this.request.Id.toString();
  }

  postRequest(): Observable<any>  {    
    const body=JSON.stringify(this.request);
    console.log(body);
    return this.http.post(`${ this.baseURL + this.urlRequest }`, body, this.httpOptions);
  }

  setNewRequestId(){
    this.request.newRequestId();
  }
}
