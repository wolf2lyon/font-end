import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrivateComponent } from './components/private/private.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'private',component:PrivateComponent,canActivate:[authGuard]},
  {path:'login',component:LoginComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
