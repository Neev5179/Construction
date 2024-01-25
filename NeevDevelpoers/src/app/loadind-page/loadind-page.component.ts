import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loadind-page',
  templateUrl: './loadind-page.component.html',
  styleUrls: ['./loadind-page.component.scss']
})
export class LoadindPageComponent {



  constructor(private router:Router){}

  goToHome(){
    console.log("homecomp");
    
    this.router.navigateByUrl("homeMod/homeData")
  }

  goToAbout(){
    this.router.navigateByUrl("aboutMod/aboutData")

  }
  goToService(){
    this.router.navigateByUrl("serviceMod/servicesData")

  }
  goToGallary(){
    this.router.navigateByUrl("gallaryMod/gallaryData")

  }
  goToProject(){
    this.router.navigateByUrl("projectMod/projectData")

  }
}
