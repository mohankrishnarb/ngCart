import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoriesRoutingModule } from './subcategories-routing.module';
import { EditSubcategoryComponent } from './edit-subcategory/edit-subcategory.component';
import { ViewSubcategoryComponent } from './view-subcategory/view-subcategory.component';


@NgModule({
  declarations: [
    EditSubcategoryComponent,
    ViewSubcategoryComponent
  ],
  imports: [
    CommonModule,
    SubcategoriesRoutingModule
  ]
})
export class SubcategoriesModule { }
