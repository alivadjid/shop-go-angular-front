import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
    private http: HttpClient,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
    });
  }
  ngOnInit(): void {}
  submit(): void {
    // console.log(this.form.getRawValue());
    this.http
      .post(`/proxy/login`, this.form.getRawValue(), {
        withCredentials: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['/']);
      });
  }
}
