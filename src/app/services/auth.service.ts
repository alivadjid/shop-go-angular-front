import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root', // same as include in module.providers. But this is much cleaner
})
export class AuthService {
  constructor(protected http: HttpClient) {}

  login(data: { email: string; password: string }): Observable<any> {
    // return this.http.post(`${environment.api}/login`, data, {
    return this.http.post(`/proxy/login`, data, {
      // withCredentials: true,
    });
  }

  register(data: {}): Observable<User> {
    return this.http.post<User>(`${environment.api}/login`, data);
  }

  user(): Observable<User> {
    // return this.http.get(`${environment.api}/user`, { withCredentials: true });
    return this.http.get<User>(`/proxy/user`, {
      // withCredentials: true
    });
  }

  logout(): Observable<void> {
    return this.http.post<void>(
      `/proxy/logout`,
      {},
      {
        // withCredentials: true
      }
    );
  }

  updateInfo(data: any): Observable<User> {
    return this.http.put<User>(`proxy/users/info`, data);
  }
  updatePassword(data: any): Observable<User> {
    return this.http.put<User>(`proxy/users/password`, data);
  }
}
