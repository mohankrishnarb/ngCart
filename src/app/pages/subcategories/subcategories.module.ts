import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoriesRoutingModule } from './subcategories-routing.module';
import { EditSubcategoryComponent } from './edit-subcategory/edit-subcategory.component';
import { ViewSubcategoryComponent } from './view-subcategory/view-subcategory.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    EditSubcategoryComponent,
    ViewSubcategoryComponent
  ],
  imports: [
    CommonModule,
    SubcategoriesRoutingModule,
    MatRadioModule,
    MatButtonModule
  ]
})
export class SubcategoriesModule { }
