import { Component, Input } from '@angular/core';
import { User } from '../interfaces/user';
import { Product } from '../interfaces/product';
import { AuthService } from 'src/app/authorization/auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  product!: Product;
  
  @Input()
  user?: User;
  
  @Input()
  cardCondition?: boolean;

  @Input()
  addToCart!: Function;
  
  @Input()
  removeFromCart!: Function

  @Input()
  service!: AuthService
}
