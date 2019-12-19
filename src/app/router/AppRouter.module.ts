import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../home/welcome.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path : 'welcome', component : WelcomeComponent },
      // Specify a default route to welcome component.
      { path : '', redirectTo : 'welcome', pathMatch: 'full' },
      // Wildcard path incase if the requested url doesn't match with any prior url. It is generally used to 
      // display 404 not found page but here we are using to display welcome page
      { path : '**', redirectTo : 'welcome', pathMatch: 'full' },
    ]),
  ],
  exports : [
    RouterModule
  ]
})
export class AppRouterModule { }
