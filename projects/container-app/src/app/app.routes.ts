import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { AppComponent } from './app.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'insurance-details',
        pathMatch: 'full'
      },
    {
      path: 'insurance-details',
      loadChildren: () => loadRemoteModule({
          type: 'manifest',
          remoteName: 'mfeInsuranceDetails',
          exposedModule: './Module'
        })
        .then(m => m.InsuranceDetailsModule)
    },
    {
      path: 'premium-payment',
      loadChildren: () => loadRemoteModule({
          type: 'manifest',
          remoteName: 'mfePremiumPayment',
          exposedModule: './Module'
        })
        .then(m => m.PremiumPaymentModule)
    },
];
