import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // same as include in module.providers. But this is much cleaner
})
export class AuthService {
  constructor(protected http: HttpClient) {}

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${environment.api}/login`, data, {
      withCredentials: true,
    });
  }

  register(data): Observable<any> {
    return this.http.post(`${environment.api}/login`, data);
  }
}
