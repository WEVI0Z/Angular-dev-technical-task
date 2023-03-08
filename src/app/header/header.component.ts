import { Component, Input } from '@angular/core';
import { Navigation } from '../app.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { userChildState } from './store/reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  navigationList: Navigation[] = [];
  
  @Input()
  user!: Observable<boolean>;
  
  @Input()
  logout!: Function;
  
  @Input()
  store!: Store<{userHeader: userChildState}>;
}
