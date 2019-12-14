import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { ConvertToSpacesPipes } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/start.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product/product-details.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';


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
      { path : 'product', component : ProductListComponent },
      { path : 'product/:id', component : ProductDetailsComponent },
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
