import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faBuilding } from '@ng-icons/font-awesome/regular';
import { faSolidEnvelope, faSolidPhone } from '@ng-icons/font-awesome/solid';

interface ContactModel {
  name: string;
  budget: string;
  email: string;
  message: string;
  isChecked: boolean;
}
@Component({
  selector: 'app-contact',
  imports: [NgIcon, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  viewProviders: [provideIcons({faSolidPhone, faBuilding, faSolidEnvelope})]
})
export class Contact {
  budgetOptions: string[] = ["$500", "$1000", "$1500", "$1700", "$2000"]
  contacts: any[] = [
    {
      icon: "faSolidPhone",
      text: "+1 555 505 5050"
    },
    {
      icon:"faSolidEnvelope",
      text: "info@designmodo.com"
    },
    {
      icon: "faBuilding",
      text: "San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco, 230909"
    },

  ]

  model: ContactModel = {
    name: "",
    budget: "$500",
    email: "",
    message: "",
    isChecked: true
  }

  submit(form:NgForm){
if (form.valid){
  console.log(this.model)
}
  }
}
