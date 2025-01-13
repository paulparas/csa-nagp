import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PremiumPaymentComponent } from './premium-payment.component';
import { RouterModule } from '@angular/router';
import { PREMIUM_PAYMENT_ROUTES } from './premium-payment.routes';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [PremiumPaymentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PREMIUM_PAYMENT_ROUTES),
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatButton,
    MatInputModule,
    MatListModule,
    MatSnackBarModule
  ],
  providers: []
})
export class PremiumPaymentModule { }
