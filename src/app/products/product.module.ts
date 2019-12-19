import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { RouterModule } from '@angular/router';
import { ConvertToSpacesPipes } from '../shared/convert-to-spaces.pipe';
import { ProductDetailsGuard } from './product-details.guard';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipes,
    ProductDetailsComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path : 'products', component : ProductListComponent },
      { 
        path : 'products/:id', 
        component : ProductDetailsComponent ,
        canActivate : [ProductDetailsGuard],
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
