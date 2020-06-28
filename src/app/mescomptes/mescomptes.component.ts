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

  rows :any;
  clientId;
  headers = [ "N° du compte","Type","Solde"];
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

  gotoacount() {

  }
}
