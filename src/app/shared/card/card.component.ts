import { Component, Input } from '@angular/core';
import { User } from '../interfaces/user';
import { Product } from '../interfaces/product';
import { Store } from '@ngrx/store';
import { CardState } from './store/reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  product!: Product;
  
  @Input()
  user!: Observable<User | undefined>;
  
  @Input()
  cardCondition!: Observable<boolean>;

  @Input()
  addToCart!: Function;
  
  @Input()
  removeFromCart!: Function
  
  @Input()
  store!: Store<{card: CardState}>;

  ngOnInit() {
    this.cardCondition.subscribe(item => console.log(item));
  }
}
