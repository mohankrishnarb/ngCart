import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path:'dashboard', component: DashboardComponent },
  { path:'categories', loadChildren:() => import('./categories/categories.module').then(m => m.CategoriesModule) },
  { path:'contact', component: ContactComponent },
  { path:'roles', component: RolesComponent },
  { path:'users', component: UsersComponent },
  { path:'posts', component:PostsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
