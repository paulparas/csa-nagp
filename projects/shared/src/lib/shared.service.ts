import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { mockPolicies } from './mock-policies';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private subject = new Subject<{ eventName: string; data: any }>();
  
    // Observable to listen for events
    // events$ = this.eventSubject.asObservable();
  
    // Emit an event
    emit(eventName: string, data: any): void {
      this.subject.next({ eventName, data });
    }

    // Listen for events
  on(eventName: string): Observable<any> {
    return new Observable((observer) => {
      this.subject.subscribe((event) => {
        if (event.eventName === eventName) {
          observer.next(event.data);
        }
      });
    });
  }

    getPolicyDetails() {
      let policies = mockPolicies;
      return of(policies);
    }

    getPolicyDetailsById(policyId: string) {
      let policies = mockPolicies;
      return of(policies.find(policy => policy.policyId === policyId));
    }
}
