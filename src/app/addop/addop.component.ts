import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import {ClientdataService} from "../clientdata.service";


@Component({
  selector: 'app-addop',
  templateUrl: './addop.component.html',
  styleUrls: ['./addop.component.css']
})
export class AddopComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb : FormBuilder,private route: Router,private cAjout:ClientdataService) { }

  ngOnInit(): void {
    this.signupForm=this.fb.group({
      numcomp: [],
      nomem: [],
      nomdest: [],
      datedepot: [],
      montant:[],
      cin:[],


    });
  }


  signup(){
    console.log('Données de formulaire ...',this.signupForm.value);

    this.cAjout.effectuerVirement(this.signupForm.value.numcomp,this.signupForm.value.montant)
      .subscribe(data=>{
        console.log(data);
        this.route.navigateByUrl("agent/compte")
        
      },error => {
        console.log(error)
      })
  }

}
