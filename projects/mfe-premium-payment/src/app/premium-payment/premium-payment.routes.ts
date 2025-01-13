import { Routes } from '@angular/router';
import { PremiumPaymentComponent } from './premium-payment.component';

export const PREMIUM_PAYMENT_ROUTES: Routes = [
    {
      path: '',
      redirectTo: 'premium-payment',
      pathMatch: 'full'
    },
    {
      path: 'premium-payment',
      component: PremiumPaymentComponent
    }
];
