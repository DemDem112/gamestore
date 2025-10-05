import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Profile } from './pages/profile/profile';
import { Main } from './pages/main/main';
import { EditProfile } from './pages/edit-profile/edit-profile';

export const routes: Routes = [
  { path: 'main', component: Main },
  { path: 'login', component: Login },
  { path: 'profile', component: Profile },
  { path: 'register', component: Register },
  { path: 'edit-profile', component: EditProfile },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
