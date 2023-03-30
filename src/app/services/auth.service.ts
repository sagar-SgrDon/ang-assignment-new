import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, map, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new Subject<any>();

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: any) {
    return this.http
      .post<any>('https://dummyjson.com/auth/login', credentials, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(
        catchError((err: any) => {
          return this.handleError(err);
        })
      );
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Error : ${err.error.message}`;
    } else {
      errorMessage = `${err.error.message}`;
    }

    return throwError(() => {
      return errorMessage;
    });
  }

  isLoggedIn() {
    const userData = localStorage.getItem('user');
    if (!userData) return false;
    let jwtHelper = new JwtHelperService();
    this.user.next(jwtHelper.decodeToken(userData));
    const expirationDate = jwtHelper.getTokenExpirationDate(userData);
    const isExpired = jwtHelper.isTokenExpired(userData);
    // console.log(expirationDate, isExpired);
    if (isExpired) localStorage.removeItem('user');
    return !isExpired;
  }

  get currentUser() {
    const userData = localStorage.getItem('user');
    if (!userData) return false;
    return new JwtHelperService().decodeToken(userData);
  }
}
