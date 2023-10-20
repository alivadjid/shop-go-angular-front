import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/classes/auth';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @Input('user') user: User;

  ngOnInit(): void {
    // this.authService.user().subscribe((user) => (this.user = user));
    Auth.userEmitter.subscribe((user) => (this.user = user));
  }

  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout().subscribe(() => {
      console.log('success');
    });
    // this.router.navigate(['/']);
  }
}
