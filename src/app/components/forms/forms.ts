import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
  activeTab: string = 'signup';
  // email: string = '';
  // password: string = '';
  // name: string = '';
forms;

  constructor(private fb: FormBuilder) {
  this.forms = this.fb.group({
    name: ['name'],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  // private fb = new FormBuilder();



  setActiveTab(tab: string) {
    this.activeTab = tab;
  }


  submit(){
    if (this.forms.invalid) {
      this.forms.markAllAsTouched();
      return;
    }
    console.log(this.forms.value);
    this.forms.reset();
    // console.log({tab: this.activeTab, email: this.email, name: this.name, password: this.password})
    // this.email = '';
    // this.password = '';
    // this.name = '';
  }
}
