import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

interface CustomerDetails {
  id: number | string;
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  gender: string;
  pin: string;
  country: string;
  state: string;
}

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  @Input() customerDetailsRecords: CustomerDetails[] = [];
  @Input() selectedId: CustomerDetails | null = null;
  mergedCusDetails: CustomerDetails | null = null;

  constructor() {}

  ngOnInit(): void {
    // Any initialization logic if needed
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.customerDetailsRecords?.length && this.selectedId) {
      const index = this.customerDetailsRecords.findIndex(
        (item) => item.id === this.selectedId?.id
      );

      if (index !== -1) {
        this.mergedCusDetails = {
          ...this.customerDetailsRecords[index],
          ...this.selectedId,
        };
        console.log('Merged Customer Details:', this.mergedCusDetails);
      } else {
        console.warn('Selected customer ID not found in records!');
        this.mergedCusDetails = null; // Reset if no match
      }
    } else {
      console.warn(
        'Either customerDetailsRecords is empty or selectedId is null!'
      );
      this.mergedCusDetails = null;
    }
  }
}
