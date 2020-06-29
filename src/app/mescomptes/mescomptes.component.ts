import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AccountComponent } from '../account/account.component';
import {ClientdataService} from "../clientdata.service";


@Component({
  selector: 'app-mescomptes',
  templateUrl: './mescomptes.component.html',
  styleUrls: ['./mescomptes.component.css']
})
export class MescomptesComponent implements OnInit {

  compte:any;
  rows :any;
  clientId;
  numCompte:number;
  headers = [ "Numéro","Type","Solde"];
  constructor(private route:Router,private ccAjout:ClientdataService,
    private dialog:MatDialog) { }

  ngOnInit(){
     this.clientId=this.ccAjout.clientId;
     console.log(this.clientId);
     this.ccAjout.getCompteClient(this.clientId)
       .subscribe(data=>{
         this.rows=data
       })

  }


  ajouter(){
    this.dialog.open(AccountComponent);
  }

  onDeleteCompte(id: any) {
    this.ccAjout.deleteCompte(id)
      .subscribe(data=>{
        console.log(data)
        window.location.reload()
      })
  }
  
/*
  updateCompte(id_compte){
    this.clientId=sessionStorage.getItem('id');
    this.ccAjout.modifyCompte(id_compte,this.clientId,this.compte).subscribe(data => {
      this.compte=data;
    })
  }*/
}
