import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  firsName = '';
  lastName = '';
  email = '';
  password = '';
  passwordConfirm = '';

  // ngOnInit(): void {}

  submit() {
    console.log('confirm', this.firsName);
  }
}
