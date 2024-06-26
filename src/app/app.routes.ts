import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './auth/guards/isAuthenticated.guard';
import { isNotAuthenticatedGuard } from './auth/guards/isNotAuthenticated.guard';

export const routes: Routes = [
    {
        path: 'auth',
        canActivate: [isNotAuthenticatedGuard],
        loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
    },
    {
        path: 'dashboard',
        canActivate: [isAuthenticatedGuard],
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule)
    },
    {
        path: '**',
        redirectTo: 'auth'
    }
];
