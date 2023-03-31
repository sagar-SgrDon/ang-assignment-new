import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isUser!: boolean;
  constructor() {
    const user = localStorage.getItem('user');
    this.isUser = user ? true : false;
  }
}
