import { Injectable } from '@angular/core';
import { AuthenticationService } from './_services';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()


export class ClientdataService {
  name:string;
  email:string;
  cin:string;

  Telephone:string;
  Numcompte:string;

  url='http://localhost:8085/agent/CreerClient'

  constructor(private auth:AuthenticationService, private http:HttpClient){


  }
  public save(client:any) {


    return this.http.post<any>(this.url,client);
  }
 public getAllClient(){
    return this.http.get("http://localhost:8085/clients");
 }
}






