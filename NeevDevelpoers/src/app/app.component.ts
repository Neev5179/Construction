import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NeevDevelpoers';



  constructor(private router:Router ,private renderer:Renderer2 ){}


  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'overflow-x', 'hidden');
  }
  
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
