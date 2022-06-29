import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCatoryComponent } from '../categories/edit-catory/edit-catory.component';
import { ViewSubcategoryComponent } from './view-subcategory/view-subcategory.component';

const routes: Routes = [
  { path:'edit-category/:id', component: EditCatoryComponent },
  { path:'view-subcategory', component: ViewSubcategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategoriesRoutingModule { }
