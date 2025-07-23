import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-details',
  imports: [CommonModule],
  templateUrl:'./personal-details.html',
  styleUrl: './personal-details.scss'
})
export class PersonalDetails {
constructor(private router: Router){}

onSelect(){ 
  this.router.navigate(['/personaldetails']);
}

}
