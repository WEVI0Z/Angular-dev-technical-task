import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthService } from './shared/auth.service';
import { ActivatedRoute } from '@angular/router';

interface Navigation {
  name: string,
  link: string,
  canActivateByUser: boolean,
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
  ) {}
  
  ngOnInit() {
    this.navigationList = [
      {name: "Вход", link: "/user/login", canActivateByUser: false},
      {name: "Регистрация", link: "/user/register", canActivateByUser: false},
      {name: "Товары", link: "/product/list", canActivateByUser: true},
      {name: "Корзина", link: "/goods/list", canActivateByUser: true}
    ];
  }

  logout() {
    this.auth.logout();
  }
}
