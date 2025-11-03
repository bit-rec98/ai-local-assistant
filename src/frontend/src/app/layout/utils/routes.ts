import { RouteModel } from './route.model';

export const routes: RouteModel[] = [
	{
		name: 'home',
		path: ''
	},
	{
		name: 'chat',
		path: '/chat'
	},
	{
		name: 'login',
		path: 'auth/login'
	},
	{
		name: 'register',
		path: 'auth/register'
	}
];
