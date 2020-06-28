import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ClientdataService} from "../clientdata.service";

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css']
})
export class ComptesComponent implements OnInit {
  todayDate=new Date;

  headers = [ "N° du compte","Type","Solde"];

rows ;
 constructor(private route:Router,private cAjout:ClientdataService) { }
  ngOnInit(){

 this.cAjout.getAllCompte()
   .subscribe(data=>{
     console.log(data)
     this.rows=data
   })
  }
  gotoacount(){
    this.route.navigate(['agent/consultercompte'])

  }


}
