import { Component, OnInit, Output } from '@angular/core';
import { AddclientComponent } from '../addclient/addclient.component';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import { EventEmitter } from 'events';
import { ClientdataService } from '../clientdata.service';
import { ClientprofileComponent } from '../clientprofile/clientprofile.component';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  todayDate : Date = new Date();
   cin:string='';
   c:string='';
   tab:Array<string>;
   rows :any;

  durationInSeconds = 5;

  headers = ["CIN", "Nom de client","Prénom","Email","Téléphone","Ajouter Compte","Supprimer/Modifier"];
  constructor(private router: Router, private dialog: MatDialog, private cAjout: ClientdataService,private _snackBar: MatSnackBar ) {
   }
  ngOnInit(): void {
this.cAjout.getAllClient()
  .subscribe(data=>{
    console.log(data)
    this.rows=data;
  })
  }
  goprofile()
{

  for(let row of this.rows){


  }

}

  onadd(){
    this.dialog.open(AddclientComponent);
  }


  onCreateCompte(id: any) {
this.cAjout.clientId=id;
this.router.navigateByUrl("/agent/account")
  }

  onDeleteClient(id: any) {
    this.cAjout.deleteClient(id)
      .subscribe(data=>{
        console.log(data)
        window.location.reload()
      })
  }

  onShowClient(id: any) {
this.cAjout.getClient(id)
  .subscribe(data=>{
    console.log(data)
    this.cAjout.client=data;
    this.router.navigateByUrl("/agent/consulter")
  })
  }
}
