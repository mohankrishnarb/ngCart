import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCatoryComponent } from '../categories/edit-catory/edit-catory.component';
import { ViewCatgoryComponent } from '../categories/view-catgory/view-catgory.component';

const routes: Routes = [
  { path:'edit-category/:id', component: EditCatoryComponent },
  { path:'view-subcategory', component: ViewCatgoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategoriesRoutingModule { }
