import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  products: Product[] = [
    {
      id: 0,
      name: "loading",
      description: "loading",
      photo: "",
      price: 0
    }
  ];

  constructor(
    private authService: AuthService,
    private productService: ProductService,
  ) {}
  
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProductsOfUserById(1).subscribe(data => {
      this.products = data;
    })
  }
}
