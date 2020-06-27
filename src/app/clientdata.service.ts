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
    let username = 'admin';
      let password='admin';
    const headers = new HttpHeaders({
      
      Authorization: 'Basic ' + btoa( this.auth.username+ ':' +this.auth.password),
    });
    return this.http.post<any>(this.url ,client);
  }    /*
  constructor( _name:string,
    pemail:string,
    pcin:string,
    pDatedenaissance :string,    
    pTelephone:string,
    pNumcompte:string,
    pdatedajout:string){

     this.name=_name;
     this.email=pemail;
     this.cin=pcin;
     this.Datedenaissance=pDatedenaissance;
     this.Telephone=pTelephone;
     this.Numcompte=pNumcompte;
     this.datedajout=pdatedajout

  }
*/
  
  setname(p:string){
    this.name=p;
  }
  getname(){
    return this.name
  }
  setcin(p:string){
    this.cin=p;
  }
  getcin(){
    return this.cin
  }
  
  setccompt(p:string){
    this.Numcompte=p;
  }
  getcmpte(){
    return this.Numcompte
  }
  settel(p:string){
    this.Telephone=p;
  }
  gettel(){
    return this.Telephone
  }
  getemail(){
    return this.email
  }

  setemail(p:string){
    this.email=p;
  }
 


  
}