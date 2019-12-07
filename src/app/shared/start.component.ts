import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector:'pm-star',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']
})
export class StarComponent implements OnChanges{
    
    @Input() rating :number ;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string> ();
    starWidth : number;


    onClick(): void {
        // use backtick to use rating in the string.
        console.log(`This rating ${this.rating} is Clicked`);
        this.ratingClicked.emit(`This rating ${this.rating} is Clicked`);
    }
    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        this.starWidth = this.rating*75/5;
        // throw new Error("Method not implemented.");
    }
}

