import { Component} from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'projeto-angular-senai';

  constructor(ngbConfig: NgbConfig){
    ngbConfig.animation = false;
  }

}
