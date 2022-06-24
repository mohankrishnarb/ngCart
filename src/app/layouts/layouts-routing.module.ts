import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutsComponent } from './layouts.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
    { path:'header', component: HeaderComponent },
    { path:'footer', component: FooterComponent },
    { path:'', component: LayoutsComponent },
    { path:'menu', component: MenuComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LayoutsRoutingModule {}