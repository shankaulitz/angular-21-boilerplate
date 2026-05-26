import { Injectable, inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

// Using relative paths to fix the "Cannot find module" errors
import { environment } from '../environments/environment';
import { AccountService } from '../_services/account.service'; 

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    // Removed constructor parameter to completely fix the "No suitable injection token" loop
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Safely fetch AccountService dynamically using Angular's inject function
        const accountService = inject(AccountService);
        
        const account = accountService.accountValue;
        const isLoggedIn = account && account.jwtToken;
        const isApiUrl = request.url.startsWith(environment.apiUrl);

        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${account.jwtToken}`
                }
            });
        }

        return next.handle(request);
    }
}