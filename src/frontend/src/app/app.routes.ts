import { Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth/auth.guard';

export const routes: Routes = [
	// Auth routes
	{
		path: 'auth',
		// canActivate: AuthGuard,
		children: [
			// Login route
			{
				path: 'login',
				loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent)
			},

			// Register route
			{
				path: 'register',
				loadComponent: () => import('./pages/register/register.component').then((m) => m.RegisterComponent)
			},

			// Reset password route
			{
				path: 'reset-password',
				loadComponent: () =>
					import('./pages/reset-password/reset-password.component').then((m) => m.ResetPasswordComponent)
			},

			// Recover password route
			{
				path: 'recover-password',
				loadComponent: () =>
					import('./pages/recover-password/recover-password.component').then((m) => m.RecoverPasswordComponent)
			}
		]
	},

	// Home route
	{
		path: '',
		loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent)
	},

	// Chat route
	{
		path: 'chat',
    // canActivate: AuthGuard
		loadComponent: () => import('./pages/chat/chat.component').then((m) => m.ChatComponent)
	}
];
