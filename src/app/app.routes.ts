import { Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

export const routes: Routes = [
  {
    path:'',
    redirectTo: 'acceuil',
    pathMatch: 'full'
  },
  {
    path: 'acceuil',
    loadComponent:() => import('./pages/accueil/accueil').then(m=>m.Accueil)
  },

  {
    path:'login',
    loadComponent: () => import ('./pages/login/login').then(m => m.Login)
  },
  {
    path:'dashboard',
    canActivate: [AuthGuardService],
    loadComponent: () => import ('./pages/dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path:'inscription',

    loadComponent: () => import ('./pages/sign-in/sign-in').then(m => m.SignIn)
  }
];
