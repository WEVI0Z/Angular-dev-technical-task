import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { UserProductService } from 'src/app/shared/user-product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  products: Product[] = [];

  constructor(
    private userProductService: UserProductService,
  ) {}
  
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.userProductService.getProductsOfUserById(1).subscribe(data => {
      this.products = data;
      console.log(data);
    })
  }
}
