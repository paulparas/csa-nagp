import { Component, inject } from '@angular/core';
import { SharedService } from 'shared';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-premium-payment',
  templateUrl: './premium-payment.component.html',
  styleUrl: './premium-payment.component.scss'
})
export class PremiumPaymentComponent {
  private _snackBar = inject(MatSnackBar);
  policyId = '';
  policyDetails: any = {};
  showPolicyDetails = false;
  policyNotFoundBanner = false;
  premiumAmountBanner = 'Worker is running...';
  showPremiumAmount = false;
  policyIdPattern = '^[a-zA-Z0-9]{8,12}$'; // Alphanumeric, 8-12 characters

  displayedColumns: string[] = ['policyId', 'policyName', 'policyType', 'policyStartDate', 'policyEndDate', 'coverageAmount', 'status', 'payPremium'];

  constructor(private sharedService: SharedService) {}

  fetchPolicyDetails(policyId: string) {
    this.policyDetails = {};
    this.showPolicyDetails = false;

    this.sharedService.getPolicyDetailsById(policyId).subscribe(
      (data: any) => {
        if (!data) {
          this.policyNotFoundBanner = true;
          return;
        }
        this.policyNotFoundBanner = false;
        this.policyDetails = data;
        this.showPolicyDetails = true;
      },
      (error) => {
        console.error('Error fetching policy details', error);
      }
    );
  }

  calculatePremium() {
    this.showPremiumAmount = true;
    // const worker = new Worker(new URL('./premium-calculator.worker', import.meta.url), { type: 'module' });
      const workerCode = `
        addEventListener('message', ({ data }) => {
          const { policyDetails } = data;
          const premium = calculatePremium(policyDetails);
          postMessage(premium);
        });

        function calculatePremium(policyDetails) {
          // add delay to simulate long running process
          const delay = 7000;
          const start = Date.now();
          while (Date.now() < start + delay) {}
          let premium = 0;
          if (policyDetails.coverageAmount) {
            premium = policyDetails.coverageAmount * 0.05; // 5% of coverage amount
          }
          return premium;
        }
      `;
    const blob = new Blob([workerCode], { type: 'application/javascript' });
    const worker = new Worker(URL.createObjectURL(blob));
    worker.postMessage({ policyDetails: this.policyDetails });
    worker.onmessage = ({ data }) => {
      this.premiumAmountBanner = `Calculated Premium Amount is: ${data}`;
    };
  }

  payPremium() {  
      if (this.policyDetails.status === 'Active') {
        this._snackBar.open('Policy is already active');
        return;
      }
        
      this.policyDetails.status = 'Active';
      // set policy end date to 1 year from today
      const today = new Date();
      const endDate = new Date(today);
      endDate.setFullYear(today.getFullYear() + 1);
      this.policyDetails.policyEndDate = endDate.toISOString().split('T')[0];
      console.log('Policy details after premium payment', this.policyDetails);  
      this.sharedService.emit('premiumPaid', this.policyDetails);
  }
}
