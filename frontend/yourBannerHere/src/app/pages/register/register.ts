import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Alert } from '../../components/alert/alert';

@Component({
  selector: 'app-register',
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule, Alert],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  notCoincidentPassword = false;
  errorsInFields = false;
  userNameAlreadyExists = false;

  errors = [
    {type: "required", message: "Field must not be empty"},
    {type: "maxlength", message: "Field length is too big"},
    {type: "minlength", message: "Field length is too small"},
    {type: "email", message: "Field must be an email"},
  ]

  userData = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.maxLength(16), Validators.minLength(2)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
    passwordConfirmation: new FormControl("", [Validators.required])
  })

  register() {
    console.log(this.userData.value);
    // Passwords are not the same
    if (this.userData.value.password !== this.userData.value.passwordConfirmation) {
      this.notCoincidentPassword = true;
      setTimeout(() => {
        this.notCoincidentPassword = false;
      }, 4000);
      return;
    }
    // Errors in some fields
    if (!this.userData.valid) {
      this.errorsInFields = true;
      setTimeout(() => {
        this.errorsInFields = false;
      }, 4000);
      return;
    }
    
  }
}
