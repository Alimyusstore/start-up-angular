import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-forms',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly authService: AuthService = inject(AuthService);
  activeTab: string = 'signup';
  // email: string = '';
  // password: string = '';
  // name: string = '';
forms = this.fb.group({
    name: ['name'],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });


  // private fb = new FormBuilder();

  // nameChange$ = this.forms.get('name')?.valueChanges
  // .pipe(
  //   tap(name => this.logName(name))
  // );

  // logName(name?: string | null) {
  //   console.log('Name changed:', name);
  // }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }


  submit(){
    // if (this.forms.invalid) {
    //   this.forms.markAllAsTouched();
    //   return;
    // }
    this.authService.signup(this.forms.value).subscribe({
      next: (response) => {
        console.log('Signup successful:', response, (this.forms.value));
        this.forms.reset();
      },
      error: (error) => {
        console.error('Signup failed:', error);
      }
    });
    // console.log(this.forms.value);
    // this.forms.reset();
    // console.log({tab: this.activeTab, email: this.email, name: this.name, password: this.password})
    // this.email = '';
    // this.password = '';
    // this.name = '';
  }
}
