import { Component, Input } from '@angular/core';
import { Navigation } from 'src/app/app.component';
import { AuthService } from 'src/app/authorization/services/auth.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'header-smart-component',
  template: `<app-header
              [navigationList]="navigationList"
              [logout]="logout"
              [isUser]="isUser" 
              [auth]="auth"
            ></app-header>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderSmartComponent {
  @Input() navigationList: Navigation[] = [];
  isUser: boolean = !!this.auth.token;

  constructor(protected auth: AuthService) {}

  ngAfterContentChecked() {
    this.isUser = !!this.auth.token;
  }

  logout() {
    this.auth.logout();
  }
}
