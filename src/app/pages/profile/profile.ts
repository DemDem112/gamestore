import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {
  constructor(private router: Router) {}

  onProfile() {
    this.router.navigate(['/edit-profile']);
    console.log('User is logging in and navigating to /edit-profile');
  }
  onEdit() {
    this.router.navigate(['/edit-profile']);
    console.log('User is logging in and navigating to /edit-profile');
  }

  onSingOut() {
    this.router.navigate(['/login']);
    console.log('User is logging in and navigating to /login');
  }
}
