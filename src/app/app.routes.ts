import { Routes } from '@angular/router';
import HomeComponent from './Home/Home.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./Home/Home.component'),
  },
  {
    path:'datos',
    loadComponent: () => import('./datos/datos.component'),
  },
  {
    path:'datos/:id',
    loadComponent: () => import('./detalle-datos/detalle-datos.component'),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
