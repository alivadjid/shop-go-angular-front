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
    // return this.http.post(`${environment.api}/login`, data, {
    return this.http.post(`/proxy/login`, data, {
      withCredentials: true,
    });
  }

  register(data: {}): Observable<any> {
    return this.http.post(`${environment.api}/login`, data);
  }

  user(): Observable<any> {
    // return this.http.get(`${environment.api}/user`, { withCredentials: true });
    return this.http.get(`/proxy/user`, { withCredentials: true });
  }
}
