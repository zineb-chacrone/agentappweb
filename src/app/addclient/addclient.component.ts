import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as jsPDF from 'jspdf';
import { ClientdataService } from '../clientdata.service';
import { error } from '@angular/compiler/src/util';



@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb : FormBuilder,private route: Router,     private cAjout: ClientdataService
    ) { }

  ngOnInit(): void {

  this.signupForm=this.fb.group({
    nom: [],
    prenom:[],
    email: [],
    username:[],
    password:[],
    cin: [],
    phone: [],


  });
  }


  signup(){
    console.log('hello');
    console.log('Données de formulaire ...',this.signupForm.value);
    this.onAddClient();
    this.cAjout.save(this.signupForm.value)
    .subscribe(result=>{
      console.log(result)
    },error=>{
console.log(error)      
    })
    
  }
  onAddClient(){
    console.log('Données de formulaire ...',this.signupForm.value);
    const doc = new jsPDF();
    const data=JSON.stringify(this.signupForm.value);
    console.log("download is working ...",data);
    doc.text(20,20,'client ajouter ' );
    doc.save('contrat.pdf');
  


  }




}
