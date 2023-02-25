import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthService } from './shared/auth.service';
import { ActivatedRoute } from '@angular/router';

interface Navigation {
  name: string,
  link: string,
  canActivate: boolean,
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
    private auth: AuthService,
  ) {}
  
  ngOnInit() {
    this.navigationList = [
      {name: "Вход", link: "/user/login", canActivate: !this.auth.token},
      {name: "Регистрация", link: "/user/register", canActivate: !this.auth.token},
      {name: "Товары", link: "/product/list", canActivate: !this.auth.token},
      {name: "Корзина", link: "/goods/list", canActivate: !this.auth.token}
    ];
  }
}
