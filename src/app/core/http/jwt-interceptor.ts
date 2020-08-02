import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Credentials, CredentialsService } from '../authentication/credentials.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private CredentialService: CredentialsService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to api url
       //let apiUrl = 'http://localhost:4200'
       const currentUser = this.CredentialService.credentials
       const isLoggedIn = currentUser && currentUser.token;
       //console.log(isLoggedIn)
      // const isApiUrl = request.url.startsWith(apiUrl);
        if (isLoggedIn) {
            request = request.clone({
                setHeaders: {
                    Authorization:`Bearer ${currentUser.token}`
                }
           });
        }

        return next.handle(request);
    }
}