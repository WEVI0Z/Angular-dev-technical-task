import { Component, OnInit } from '@angular/core';
import { AuthService } from './authorization/auth.service';
import { Store } from '@ngrx/store';
import { UserState } from './store/user/reducer';
import { logout } from './store/user/actions';

export interface Navigation {
  name: string,
  link: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ang-dev-tech-task';
  navigationList: Navigation[] = [];

  constructor(
    protected auth: AuthService,
    private store: Store<{user: UserState}>
  ) {}
  
  ngOnInit() {
    this.navigationList = [
      {name: "Вход", link: "/user/login"},
      {name: "Регистрация", link: "/user/register"},
      {name: "Товары", link: "/product/list"},
      {name: "Корзина", link: "/goods/list"}
    ];
  }

  logout() {
    this.store.dispatch(logout())
  }
}
