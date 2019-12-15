import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle : string = 'Product Details';
  product:IProduct | undefined;
  errorMessage : string = '';

  constructor( private route : ActivatedRoute,
      private router : Router,
      private productService :ProductService) { }

  ngOnInit() {
    // Since parameter is a string so javascript provide a shortcut ie, use '+' to convert the string to numeric
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += ` : ${id} `;
    // we could use http to access the desired product using this id.
    console.log(id);
    if(id){
      this.getProduct(id);
    }
    
  }

  getProduct(id : number) {
    this.productService.getProduct(id).subscribe({
      next : product => this.product = product,
      error : err => this.errorMessage = err
    })

  }
  onBack() : void {
    this.router.navigate(['/products']);
  }

}
