import { Injectable } from '@angular/core';
import { AuthenticationService } from './_services';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()


export class ClientdataService {
  name:string;
  email:string;
  cin:string;
  client;

  Telephone:string;
  Numcompte:string;
clientId;
  url='http://localhost:8085/agent/CreerClient'

  constructor(private auth:AuthenticationService, private http:HttpClient){


  }
  public save(client:any) {


    return this.http.post<any>(this.url,client);
  }
 public getAllClient(){
    return this.http.get("http://localhost:8085/clients");
 }

  public addCompte(id,compte:any){
    return this.http.post("http://localhost:8085/agent/"+id+"/AjouterCompte",compte);
  }

  public deleteCompte(id){
    return this.http.delete("http://localhost:8085/comptes/"+id);

  }
  
  public deleteClient(id){
    return this.http.delete("http://localhost:8085/clients/"+id);

  }
  public getClient(id){
    return this.http.get("http://localhost:8085/clients/"+id);

  }
  public modifyClient(id,client:any){
    return this.http.put("http://localhost:8085/agent/"+id+"/ModifierClient",client);
  }

  public getCompteClient(id){
    return this.http.get("http://localhost:8085/clients/"+id+"/comptes");
  }

  public getAllCompte(){
    return this.http.get("http://localhost:8085/comptes");
  }
  public effectuerVirement(id_ben,montant){
    return this.http.get("http://localhost:8085/agent/"+id_ben+"/EffectuerVirement/"+montant);
  }
}






