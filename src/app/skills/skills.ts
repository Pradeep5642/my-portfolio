import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl:'./skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  active: string = 'Angular';

  
  
constructor (private router: Router){}
 
onSelect(){ 
  this.router.navigate(['/skills']);
}
}
