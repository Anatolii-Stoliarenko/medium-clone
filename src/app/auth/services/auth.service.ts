import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { Observable, map } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { HttpClient } from '@angular/common/http';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';
import { CurrentUserInputInterface } from 'src/app/shared/types/currentUserInput.interface';

@Injectable()
export class AuthService {
  urlApi: string = 'https://api.realworld.io/api';

  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user;
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = this.urlApi + '/users';

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = this.urlApi + '/users/login';

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = this.urlApi + '/user';

    return this.http.get(url).pipe(map(this.getUser));
  }

  updateCurrentUser(
    currentUserInput: CurrentUserInputInterface
  ): Observable<CurrentUserInterface> {
    const url = this.urlApi + '/user';
    return this.http
      .put(url, { user: { currentUserInput } })
      .pipe(map(this.getUser));
  }
}
//==============explanation=====================//

/*
map calls function without brackets!!!
https://api.realworld.io/api/
https://conduit.productionready.io/api
*/
