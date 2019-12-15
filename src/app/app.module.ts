import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipes } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/start.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './products/product-details.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsGuard } from './products/product-details.guard';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipes,
    StarComponent,
    ProductDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path : 'products', component : ProductListComponent },
      { 
        path : 'products/:id', 
        component : ProductDetailsComponent ,
        canActivate : [ProductDetailsGuard],
      },
      { path : 'welcome', component : WelcomeComponent },
      // Specify a default route to welcome component.
      { path : '', redirectTo : 'welcome', pathMatch: 'full' },
      // Wildcard path incase if the requested url doesn't match with any prior url. It is generally used to 
      // display 404 not found page but here we are using to display welcome page
      { path : '**', redirectTo : 'welcome', pathMatch: 'full' },
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
