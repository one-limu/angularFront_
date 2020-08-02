import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from  'rxjs/operators';

import { Credentials, CredentialsService } from './credentials.service';
import { HttpClient } from '@angular/common/http';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    private credentialsService: CredentialsService,
    private httpClient: HttpClient
    ){}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: LoginContext): Observable<Credentials> {
    // Replace by proper authentication call
    let AUTH_SERVER = 'http://localhost:4000';
    const data = {
      username: context.username,
      _id: '',
      token: '123d456'
    };
   
    return this.httpClient.post(`${AUTH_SERVER}/users/authenticate`, context).pipe(
      tap(async (res: Credentials) => {

        if (res) {
          //localStorage.setItem("ACCESS_TOKEN", res.user.access_token);
         // localStorage.setItem("EXPIRES_IN", res.user.expires_in);
         // this.authSubject.next(true);
         data.username = res.username
         data.token = res.token
         data._id = res._id
         this.credentialsService.setCredentials(data, context.remember);
         console.log(res)
        }
      })
    );




    


    this.credentialsService.setCredentials(data, context.remember);
    return of();
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }
}
