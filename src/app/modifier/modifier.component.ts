import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CompteserviceService } from '../compteservice.service';
import { ClientdataService } from '../clientdata.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb : FormBuilder,private comptData:ClientdataService,private route :Router) { }

  ngOnInit(): void {this.signupForm=this.fb.group({
  nom:this.comptData.client.nom,
    prenom:this.comptData.client.prenom,
  email:this.comptData.client.email,
    phone:this.comptData.client.phone,
  cin: this.comptData.client.cin,
 password:[],
    username:this.comptData.client.username


});
  }
  signup(){
    console.log('Données de formulaire ...',this.signupForm.value);
    this.comptData.modifyClient(this.comptData.client.id,this.signupForm.value)
      .subscribe(data=>{
        console.log(data)
        this.route.navigateByUrl("agent/client")
      },error => {
        console.log(error)
      })
  }
  updateclient(){


  }

}

/*
Modifi(){

}

downloadpdf(){

}

*/


