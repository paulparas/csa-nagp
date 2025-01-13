import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        pathMatch: 'full'
    },
    { 
        path: 'insurance-details', 
        loadChildren: () => import('./insurance-details/insurance-details.module')
            .then(m => m.InsuranceDetailsModule)
    }
];