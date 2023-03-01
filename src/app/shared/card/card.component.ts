import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../interfaces/user';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() product!: Product;
  @Input() user!: User;
  @Input() cardCondition: boolean = false;

  @Output() addToCart = new EventEmitter<void>()
  @Output() removeFromCart = new EventEmitter<void>()
}
