import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { EditCatoryComponent } from './edit-catory/edit-catory.component';
import { ViewCatgoryComponent } from './view-catgory/view-catgory.component';

const routes: Routes = [
  { path:'categoires', component: CategoriesComponent },
  { path:'view-category', component: ViewCatgoryComponent },
  { path:'edit-category/:id', component: EditCatoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
