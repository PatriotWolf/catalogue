import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
const routes: Routes = [
  { path: '', component: HomeComponent,
  },
  { path: 'catalogue', component: CatalogueComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
