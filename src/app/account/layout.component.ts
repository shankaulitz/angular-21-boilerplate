import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '@app/_services';

@Component({
    selector: 'app-account-layout',
    templateUrl: 'layout.component.html',
    standalone: false
})
export class LayoutComponent {

    constructor(
        private router: Router,
        private accountService: AccountService
    ) {
        // redirect to home if already logged in, except for verify-email and reset-password pages
        const isCriticalFlow = this.router.url.includes('verify-email') || this.router.url.includes('reset-password');
        if (this.accountService.accountValue && !isCriticalFlow) {
            this.router.navigate(['/']);
        }
    }
}