import { Component, Input, OnInit } from '@angular/core';
import { Navigation } from '../app.component';
import { User } from '../shared/interfaces/user';
import { Store } from '@ngrx/store';
import { childLogout, getUser } from './store/actions';
import { userChildState } from './store/reducer';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-header-smart',
  template: `<app-header [navigationList]="navigationList" [logout]="logout" [user]="user"></app-header>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderSmartComponent implements OnInit {
  @Input() navigationList: Navigation[] = [];
  user: Observable<boolean> = this.store.select("userHeader").pipe(map(item => item.isUser));

  constructor(protected store: Store<{userHeader: userChildState}>) {}

  ngOnInit(): void {
    this.store.dispatch(getUser());
  }

  logout() {
    this.store.dispatch(childLogout());
  }
}