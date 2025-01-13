import { Component } from '@angular/core';
import { mockPolicies } from './mock-policies';
import { SharedService } from 'shared';

@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.component.html',
  styleUrl: './insurance-details.component.scss'
})
export class InsuranceDetailsComponent {

  policies: any[] = [];
  policyData: any = {}; // Property for binding policy data

  // add displayedColumns
  displayedColumns: string[] = ['policyId', 'policyName', 'policyType', 'policyStartDate', 'policyEndDate', 'coverageAmount', 'status'];

  constructor(private sharedService: SharedService) {
    this.policyData = {}; // Initialize policy data
  }

  ngOnInit(): void {
    this.sharedService.on('premiumPaid').subscribe((data) => {
      console.log('Received payment data:', data);
      this.updatePolicyStatus(data);
    });
    this.loadPolicies();
    // if (typeof Worker !== 'undefined') {
    //   // Create a new
    //   const worker = new Worker(new URL('./worker.worker', import.meta.url));
    //   worker.onmessage = ({ data }) => {
    //     console.log(`Page got message: ${data}`);
    //   };
    //   worker.postMessage('hello');
    // } else {
    //   // Web Workers are not supported in this environment.
    //   console.log('Web Workers are not supported in this environment.');
    // }
  }

  loadPolicies(): void {
    const storedPolicies = localStorage.getItem('policies');
    if (storedPolicies) {
      this.policies = JSON.parse(storedPolicies);
    } else {
      this.sharedService.getPolicyDetails().subscribe(
        (data) => {
          this.policies = data;
          this.savePolicies();
        },
        (error) => {
          console.error('Error fetching policies', error);
        }
      );
    }
  }

  savePolicies(): void {
    localStorage.setItem('policies', JSON.stringify(this.policies));
  }

  addPolicy(): void {
    this.policies.push(this.policyData);
    this.savePolicies();
    this.policyData = {}; // Reset form
  }

  updatePolicyStatus(data: any): void {
    // Logic to update policy status based on received data
    const policy = this.policies.find(p => p.policyId === data.policyId);
    if (policy) {
      policy.status = data.status;
      policy.policyEndDate = data.policyEndDate;
      this.savePolicies();
    }
  }

  // Method to fetch policy details
  fetchPolicyDetails(policyId: string) {
    // Logic to fetch policy details based on policyId
    this.sharedService.getPolicyDetailsById(policyId).subscribe(
      (data) => {
        this.policyData = data;
      },
      (error) => {
        console.error('Error fetching policy details', error);
      }
    );
  }

  // Method to save policy
  savePolicy() {
    // Logic to save the current policy data
  }
}
