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
  activeSkill: string = '';

constructor (private router: Router){}

 Showmsg(skill: string) {
    this.activeSkill = skill;
  }
 
onSelect(){ 
  this.router.navigate(['/skills']);
}
}
