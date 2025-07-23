import { Routes } from '@angular/router';
import { PersonalDetails } from './personal-details/personal-details';
import { EducationDetails } from './education-details/education-details';
import { Skills } from './skills/skills';
import { Home } from './home/home';
import { About } from './about/about';
import { ContactMe } from './contact-me/contact-me';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'personaldetails', component: PersonalDetails },
  { path: 'educationdetails', component: EducationDetails },
  { path: 'skills', component: Skills },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contactme', component: ContactMe }
];

export const Mycomponents= [PersonalDetails, EducationDetails, Skills, Home, About, ContactMe]  