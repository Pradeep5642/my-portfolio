import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education-details',
  imports: [CommonModule],
  templateUrl: './education-details.html',
  styleUrl: './education-details.scss'
})
export class EducationDetails {
constructor(private router: Router){}
onSelect(){ 
  this.router.navigate(['/educationdetails']);
}
}
