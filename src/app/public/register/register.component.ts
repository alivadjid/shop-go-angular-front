import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  firsName = '';
  lastName = '';
  email = '';
  password = '';
  passwordConfirm = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  submit() {
    this.http
      .post('http://localhost:8000/api/register', {
        first_name: this.firsName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
        password_confirm: this.passwordConfirm,
      })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
