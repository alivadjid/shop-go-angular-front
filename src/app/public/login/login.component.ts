import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './../public.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    // private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
    });
  }
  ngOnInit(): void {}
  submit(): void {
    this.authService.login(this.form.getRawValue()).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/']);
    });
  }
}
