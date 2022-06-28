import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { EditCatoryComponent } from './categories/edit-catory/edit-catory.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CategoriesComponent,
    ContactComponent,
    UsersComponent,
    RolesComponent,
    PostsComponent,
    EditCatoryComponent,
    SubcategoriesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutsModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    HttpClientModule
  ],

})
export class PagesModule { }
