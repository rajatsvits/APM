import { Component, OnChanges } from '@angular/core';

@Component({
    selector:'pm-star',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']
})
export class StarComponent implements OnChanges{
    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        this.starWidth = this.rating*75/5;
        // throw new Error("Method not implemented.");
    }
    rating :number =4;
    starWidth : number
}

