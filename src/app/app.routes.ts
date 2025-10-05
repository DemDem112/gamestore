import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Profile } from './pages/profile/profile';
import { Main } from './pages/main/main';
import { EditProfile } from './pages/edit-profile/edit-profile';
import { HomeAdmin } from './pages/home-admin/home-admin';
import { ViewUser } from './pages/view-user/view-user';

export const routes: Routes = [
  { path: 'main', component: Main },
  { path: 'login', component: Login },
  { path: 'profile', component: Profile },
  { path: 'register', component: Register },
  { path: 'view-user', component: ViewUser },
  { path: 'home-admin', component: HomeAdmin },
  { path: 'edit-profile', component: EditProfile },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
