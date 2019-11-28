// import { Component } from '@angular/core';

// @Component({
//   selector: 'pm-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Angular: Getting Started';
// }

import {Component } from '@angular/core';


@Component({
  selector:"whatFor-JustNAme",
  template: ` <div><h1>{{pageTitle}}</h1>
                <pm-product></pm-product>
              </div>
            `
})
 
export class AppComponent{
  pageTitle: string = "First Component";
}

