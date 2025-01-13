import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        pathMatch: 'full'
    },
    { 
        path: 'premium-payment', 
        loadChildren: () => import('./premium-payment/premium-payment.module')
            .then(m => m.PremiumPaymentModule)
    }
];
