import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './products/product.module';
import { AppRouterModule } from './router/AppRouter.module';
import { WelcomeComponent } from './home/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Note the product route should be before the APpRouter routes.
    ProductModule,
    AppRouterModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
