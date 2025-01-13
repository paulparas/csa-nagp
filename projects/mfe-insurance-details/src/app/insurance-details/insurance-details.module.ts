import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InsuranceDetailsComponent } from './insurance-details.component';
import { INSURANCE_DETAIL_ROUTES } from './insurance-details.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { provideAnimations } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(INSURANCE_DETAIL_ROUTES),
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatButton,
    MatInputModule,
  ],
  declarations: [
    InsuranceDetailsComponent
  ],
  providers: [
    ]
})
export class InsuranceDetailsModule { }
