import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
  ],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login {
  constructor(private router: Router) {}
  onLogin() {
    this.router.navigate(['/main']);
    console.log('User is logging in and navigating to /main');
  }

  onRegister() {
    this.router.navigate(['/register']);
    console.log('User is logging in and navigating to /register');
  }
}
