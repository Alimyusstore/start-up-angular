import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faSolidCheck } from '@ng-icons/font-awesome/solid';

interface PricingPlan {
  name: string;
  price: number;
  isSelected?: boolean;
  features: {label: string, isAvailable: boolean}[];
}

@Component({
  selector: 'app-pricing',
  imports: [NgIcon],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
  viewProviders: [provideIcons({faSolidCheck})]
})
export class Pricing {
  plans: PricingPlan[] = [
    {
      name: "Starter",
      price: 9.99,
      isSelected: false,
      features: [
        {label: "2 GB of space", isAvailable: true},
        {label: "14 days of backups", isAvailable: true},
        {label: "Social integrations", isAvailable: true},
        {label: "Client billing", isAvailable: true},
        {label: "Remote access", isAvailable: false},
        {label: "Custom domain", isAvailable: false},
        {label: "24 hours support", isAvailable: false},
        {label: "Admin tools", isAvailable: false},
        {label: "Collaboration tools", isAvailable: false},
        {label: "User management", isAvailable: false}
      ]
    },
    {
      name: "Professional",
      price: 19.99,
      isSelected: true, 
      features: [
        {label: "2 GB of space", isAvailable: true},
        {label: "14 days of backups", isAvailable: true},
        {label: "Social integrations", isAvailable: true},
        {label: "Client billing", isAvailable: true},
        {label: "Remote access", isAvailable: true},
        {label: "Custom domain", isAvailable: true},
        {label: "24 hours support", isAvailable: true},
        {label: "Admin tools", isAvailable: false},
        {label: "Collaboration tools", isAvailable: false},
        {label: "User management", isAvailable: false}

      ]
    },
    {
      name: "Team",
      price: 49.99,
      isSelected: false,
      features: [
        {label: "2 GB of space", isAvailable: true},
        {label: "14 days of backups", isAvailable: true},
        {label: "Social integrations", isAvailable: true},
        {label: "Client billing", isAvailable: true},
        {label: "Remote access", isAvailable: true},
         {label: "Custom domain", isAvailable: true},
        {label: "24 hours support", isAvailable: true},
        {label: "Admin tools", isAvailable: true},
        {label: "Collaboration tools", isAvailable: true},
        {label: "User management", isAvailable: true}
      ]
    }
  ];
  }
