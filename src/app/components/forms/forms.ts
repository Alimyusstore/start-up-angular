import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [FormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
  activeTab: string = 'signup';
  email: string = '';
  password: string = '';
  name: string = '';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  submit(){
    console.log({tab: this.activeTab, email: this.email, name: this.name, password: this.password})
    this.email = '';
    this.password = '';
    this.name = '';
  }
}
