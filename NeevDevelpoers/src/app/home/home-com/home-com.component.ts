import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-com',
  templateUrl: './home-com.component.html',
  styleUrls: ['./home-com.component.scss']
})
export class HomeComComponent {




  constructor(private router:Router ){}


  

 
  goToAbout(){
    this.router.navigateByUrl("aboutMod/aboutData")
  }

}
