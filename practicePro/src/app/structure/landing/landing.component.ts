import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {


  constructor(private router:Router){}

  BacktoAppLanding(){
    this.router.navigateByUrl('appLand')
  }

  Home(){
    this.router.navigateByUrl('sturcture/home')
  }

  about(){
    this.router.navigateByUrl('sturcture/about')
  }

  service(){
    this.router.navigateByUrl('sturcture/servieces')
  }
}
