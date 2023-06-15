import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersistanceService } from './persistance.servis';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private persistensService: PersistanceService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.persistensService.get('accessToken');
    request = request.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : '',
      },
    });
    return next.handle(request);
  }
}

//middle were an intercepter
