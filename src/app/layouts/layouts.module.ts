import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutsComponent } from './layouts.component';



@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    LayoutsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LayoutsComponent],
})
export class LayoutsModule { }
