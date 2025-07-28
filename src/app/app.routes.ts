import { Routes } from '@angular/router';
import { App } from './app'
import { UserHome } from './user-home/user-home';
import { CreateUser } from './create-user/create-user';
import { Login } from './login/login';

export const routes: Routes = [
{
  path: 'login',
  component: Login
},
{
  path: 'user',
  component: UserHome
},
{
  path: 'create-user',
  component: CreateUser
}
];
