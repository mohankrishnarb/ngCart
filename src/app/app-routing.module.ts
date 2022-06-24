import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { LayoutsComponent } from './layouts/layouts.component';

const routes: Routes = [
  
  /* auth routes */

  { path:'', component: AuthComponent, loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)},

  /* auth routes */

  /* layouts routes */

  { path:'layouts', component: LayoutsComponent, loadChildren:() => import('./pages/pages.module').then(m => m.PagesModule),canActivate: [AuthModule] },
  /* layouts routes */



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
