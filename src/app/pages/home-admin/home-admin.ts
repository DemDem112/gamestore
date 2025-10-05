import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-admin',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  standalone: true,
  templateUrl: './home-admin.html',
  styleUrl: './home-admin.scss'
})
export class HomeAdmin {
  constructor(private router: Router) {}
  onProfile() {
    this.router.navigate(['/profile']);
    console.log('User is logging in and navigating to /profile');
  }
}
