import { Component, OnInit } from '@angular/core';
import { ClientdataService} from '../clientdata.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { DeleteComponent } from '../delete/delete.component';
import { ModifierComponent } from '../modifier/modifier.component';
import { MescomptesComponent } from '../mescomptes/mescomptes.component';

@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent implements OnInit {

  Nom:string;
  cin:string;
  Datedenaissance:string;
  numtel:string;
  email:string;
  numcompte:string;
  datedajout:string;

  constructor(private cAjout:ClientdataService ,
    private router:Router ,
    private dialog:MatDialog) { }

  ngOnInit(): void {


  }




  afficher(){
    this.dialog.open(MescomptesComponent);
  }

  delete(){
    this.dialog.open(DeleteComponent);
  }


  modifier(){
    this.dialog.open(ModifierComponent);
  }

}
