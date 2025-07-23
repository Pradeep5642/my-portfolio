import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Mycomponents } from './app.routes';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Mycomponents, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 

}
