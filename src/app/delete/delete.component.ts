import { Component, OnInit } from '@angular/core';
import {ClientdataService} from "../clientdata.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private cAJout:ClientdataService,private route:Router) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.cAJout.deleteClient(this.cAJout.clientId)
      .subscribe(n=>{
        this.route.navigateByUrl("/agent")
      })
  }
}
