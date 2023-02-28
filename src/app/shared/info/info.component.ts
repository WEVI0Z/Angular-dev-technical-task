import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

const TEMP_PRODUCT: Product = {
  name: "Loading...",
  description: "Loading...",
  photo: "https://russia-dropshipping.ru/800/600/https/www.pinclipart.com/picdir/big/235-2355092_waiting-circle-clipart.png",
  price: 0
}

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  product: Product = TEMP_PRODUCT;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.route.params.subscribe(params => {
      this.productService.getProduct(+params["id"]).subscribe(data => {
        this.product = data;
      })
    })
  }
}
