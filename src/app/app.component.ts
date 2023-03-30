import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ang-assignment-new';

  constructor(private router: Router, private authService: AuthService) {
    const userData = localStorage.getItem('user');

    // console.log(this.authService.currentUser);
  }
}
