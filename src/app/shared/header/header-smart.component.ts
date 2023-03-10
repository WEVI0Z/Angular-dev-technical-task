import { Component, Input, OnInit } from '@angular/core';
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
  user: boolean = !!this.auth.user;

  constructor(protected auth: AuthService) {}

  ngAfterViewChecked() {
    this.user = !!this.auth.user;
  }

  logout() {
    this.auth.logout();
  }
}
