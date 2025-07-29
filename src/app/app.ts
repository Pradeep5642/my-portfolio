import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Mycomponents } from './app.routes';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Mycomponents, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 isHomePage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.urlAfterRedirects === '/home' || event.url === '/home';
      }
    });
  }
}
