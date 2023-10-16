import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', './../public.component.css'],
})
export class RegisterComponent implements OnInit {
  firsName = '';
  lastName = '';
  email = '';
  password = '';
  passwordConfirm = '';

  constructor(
    // private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  submit() {
    // this.http
    //   .post(`${environment.api}/register`, {
    // first_name: this.firsName,
    // last_name: this.lastName,
    // email: this.email,
    // password: this.password,
    // password_confirm: this.passwordConfirm,
    //   })
    this.authService
      .register({
        first_name: this.firsName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
        password_confirm: this.passwordConfirm,
      })
      .subscribe((res) => {
        this.router.navigate(['/login']);
      });
  }
}
