import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle : string = 'Product Details';
  product:IProduct;

  constructor( private route : ActivatedRoute,
      private router : Router) { }

  ngOnInit() {
    // Since parameter is a string so javascript provide a shortcut ie, use '+' to convert the string to numeric
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += ` : ${id} `;
    // we could use http to access the desired product using this id.
    this.product = {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    }
  }
  onBack() : void {
    this.router.navigate(['/products']);
  }

}
