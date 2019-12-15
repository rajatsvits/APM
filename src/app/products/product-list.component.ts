import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    // No longer require the selector as we are creating a navigation menu.
    // selector:"pm-product",
    templateUrl:"./product-list.component.html",
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService]
})

export class ProductListComponent implements OnInit {
    
    pageTitle : string = "Product list";
    imageWidth  :number = 50;
    imageMargin  :number = 2;
    showImage  : boolean = false;
    errorMessage : String ;


    // listFilter : string = 'cart';
    _listFilter : string;
    get listFilter() : string{
        return this._listFilter;
    }

    set listFilter(value:string){
        this._listFilter=value;
        //need to check weather list is not empty.
        this.filterProduct=this.listFilter ? this.performFilter(this._listFilter) : this.products;
    }

    

    filterProduct : IProduct[] ;
    products : IProduct[];
      

    constructor(private productService: ProductService){
        // this.filterProduct=this.products;
        this.listFilter = '';
    }

    onRatingClicked (message : string) : void {
        this.pageTitle = 'Product list: ' + message;
    }

    performFilter(filterby : string) : IProduct[]{
        filterby = filterby.toLocaleLowerCase();
        return this.products.filter((product : IProduct) => product.productName.toLocaleLowerCase().indexOf(filterby)!=-1);
    }

    toggleImage() :  void {
        this.showImage = !this.showImage;
    };

    ngOnInit(): void {
        // It run for component initialization and data retrieval
        // Note the constructor will run before ngOnInit so make sure its variable are initialized
        this.productService.getProducts().subscribe({
            next :products => {
                this.products = products,
                this.filterProduct=this.products
            },
            error : err => this.errorMessage= err
        });

        // Subscribe here kicks of the http request then asynchronously receive data and notification form the observable  
        
        console.log(this.filterProduct+":"+ this.products);
        // console.log("In OnInit");
        // throw new Error("Method not implemented.");
        
    }
  }
