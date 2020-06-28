import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { ClientdataService } from '../clientdata.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  signupForm:FormGroup;

  constructor(private fb : FormBuilder,private routeact: ActivatedRoute,
    private route: Router,
    private cAjout:ClientdataService) { }
idCLient;
  ngOnInit(): void {
this.idCLient=this.cAjout.clientId;
    this.signupForm=this.fb.group({

        solde:[],
      type:[]

    })
  }

  signup(){

    console.log('Données de formulaire ...',this.signupForm.value);
    this.cAjout.addCompte(this.idCLient,this.signupForm.value).subscribe(
      data=>{
        console.log(data)
        this.route.navigateByUrl("/agent/client")
      },error => {
        console.log(error)
      }
    )
  }

}
