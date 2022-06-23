import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LayoutsComponent } from './layouts/layouts.component';

const routes: Routes = [
  
  /* auth routes */

  { path:'', component: AuthComponent, loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)},

  /* auth routes */

  /* layouts routes */

  { path:'layouts', component: LayoutsComponent, loadChildren:() => import('./layouts/layouts.module').then(m => m.LayoutsModule) }

  /* layouts routes */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
