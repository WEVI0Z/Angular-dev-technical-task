import { Component, Input, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Navigation } from 'src/app/app.component';
import { AuthService } from 'src/app/authorization/auth.service';

@Component({
  selector: 'header-smart-component',
  template: `<app-header
              [navigationList]="navigationList"
              [logout]="logout"
              [user]="user" 
              [service]="auth"
            ></app-header>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderSmartComponent {
  @Input() navigationList: Navigation[] = [];
  user: Observable<boolean> = this.auth.getCurrentUser().pipe(map(item => !!item));

  constructor(protected auth: AuthService) {}

  ngAfterViewChecked() {
    this.user = this.auth.getCurrentUser().pipe(map(item => !!item), tap(data => console.log(data)));
  }

  logout() {
    this.auth.logout();
  }
}
