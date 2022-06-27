import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutsComponent } from './layouts.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { PagesModule } from '../pages/pages.module';
import { PagesRoutingModule } from '../pages/pages-routing.module';


@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    LayoutsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatSidenavModule,
    LayoutsRoutingModule,
    PagesRoutingModule
  ],
  exports:[LayoutsComponent, MenuComponent, HeaderComponent, FooterComponent ],
})
export class LayoutsModule { }
