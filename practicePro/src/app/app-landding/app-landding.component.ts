import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-landding',
  templateUrl: './app-landding.component.html',
  styleUrls: ['./app-landding.component.scss']
})
export class AppLanddingComponent {



constructor(private router:Router){}

stucture(){
  this.router.navigateByUrl('sturcture/landing')
}
}
