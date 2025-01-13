import { Routes } from '@angular/router';
import { InsuranceDetailsComponent } from './insurance-details.component';

export const INSURANCE_DETAIL_ROUTES: Routes = [
    {
      path: '',
      redirectTo: 'insurance-details',
      pathMatch: 'full'
    },
    {
      path: 'insurance-details',
      component: InsuranceDetailsComponent
    }
];
