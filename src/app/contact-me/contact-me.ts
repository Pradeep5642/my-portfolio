import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { myservice } from '../myservice';
import { Router } from '@angular/router';
import { Ctmodel } from '../ctmodel';
import { ReactiveFormsModule } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/username.validator';
import { matchFieldsValidator } from '../shared/Email.validator';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule  ],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss'
})
export class ContactMe  {

  errorMsg="";
  submitted = false;
  ReasonHasError = true;
  registrationForm!: FormGroup;

  ctmod = new Ctmodel('', '', null, 'default', '', '', '', '', '', null);

  purpose = ['For website', 'For code'];
 

  constructor( private fb: FormBuilder, private router: Router, private myservice: myservice, ) {} 

  validateReason(value: string) 
                {
                  this.ReasonHasError = (value === 'default');
                } 


  onSubmit() {
              this.submitted = true;
              
              this.myservice.enroll(this.ctmod).subscribe({
                next: (data) => console.log('Success', data),
                error: (error) => this.errorMsg= error.statusText
                                                        });
             }



  onSelect() {
              this.router.navigate(['/contactme']);
             }

}


// REACTIVE FORM //


//     this.registrationForm = this.fb.group({
//         Name: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/admin/), forbiddenNameValidator(/password/) ]],
//         Email: ['', [Validators.required]],
//         ConfirmEmail: ['', [Validators.required]],
//         Password: ['', [Validators.required]],
//         Confirmpassword: ['', [Validators.required]],
//         Address: this.fb.group({
//                                 City: [''],
//                                 State: [''],
//                                 Postalcode: ['']
//                               })
//                                             }, {validators: [
//                                                               matchFieldsValidator('Email', 'ConfirmEmail', 'emailMismatch'),
//                                                               matchFieldsValidator('Password', 'Confirmpassword', 'passwordMismatch')
//                                                             ]
//                                                 });

// }
//   get Name()             { return this.registrationForm.get('Name'); }
//   get Email()            { return this.registrationForm.get('Email'); }
//   get ConfirmEmail()     { return this.registrationForm.get('ConfirmEmail'); }
//   get Password()         { return this.registrationForm.get('Password'); }
//   get Confirmpassword()  { return this.registrationForm.get('Confirmpassword'); }

    
    

  // **binding class to the html**//
  // registrationForm= new FormGroup({

  //   Name: new FormControl(''),
  //   Email: new FormControl(''),
  //   ConfirmEmail: new FormControl(''),
  //   Address: new FormGroup({
  //     City: new FormControl(''),
  //     State: new FormControl(''),
  //     Postalcode: new FormControl('')
  //   })
  // });



  //TO LOAD API DATA//

  // loadData(){
  // this.registrationForm.setValue({        //* We can use patchValue() instead of setValue() method if we want to pass only few values *//
  //       Name: 'Pradeep',
  //       Email: 'mpradeepk1611@gmail.com',
  //       ConfirmEmail:'mpradeepk1611@gmail.com',
  //       Password: '123456',
  //       Confirmpassword:'123456',
  //       Address: ({
  //         City: 'Gadwal',
  //         State: 'Telangana',
  //         Postalcode:'123456'
  //               })
  //           })
  //         }

