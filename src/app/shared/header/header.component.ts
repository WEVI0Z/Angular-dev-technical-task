import { Component, Input } from '@angular/core';
import { Navigation } from 'src/app/app.component';
import { AuthService } from 'src/app/authorization/services/auth.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  navigationList: Navigation[] = [];
  
  @Input()
  isUser?: boolean;
  
  @Input()
  logout!: Function;

  @Input()
  auth!: AuthService;
}
