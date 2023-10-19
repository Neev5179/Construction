import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servieces',
  templateUrl: './servieces.component.html',
  styleUrls: ['./servieces.component.scss']
})
export class ServiecesComponent {


  constructor(public router:Router){}
  backToLanding(){
    this.router.navigateByUrl('sturcture/landing')
  }
}


