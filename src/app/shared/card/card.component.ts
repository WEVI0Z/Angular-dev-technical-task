import { Component, Input } from '@angular/core';
import { User } from '../interfaces/user';
import { Product } from '../interfaces/product';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/store/user/reducer';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  product!: Product;
  
  @Input()
  user!: User;
  
  @Input()
  cardCondition: boolean = false;

  @Input()
  addToCart!: Function;
  
  @Input()
  removeFromCart!: Function
  
  @Input()
  store!: Store<{user: UserState}>;
}
