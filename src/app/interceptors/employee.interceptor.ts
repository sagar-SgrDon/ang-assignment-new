import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class EmployeeInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const id = this._authService.currentUser.id;
    const modifiedreq = request.clone<any>({
      headers: request.headers.set('check-header', String(id)),
    });
    return next.handle(modifiedreq).pipe(
      map((resp: any) => {
        if (resp instanceof HttpResponse) {
          resp = resp.clone<any>({
            headers: resp.headers.set('check-header', String(id)),
          });
          return resp;
        }
      })
    );
  }
}
