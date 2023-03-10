import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Navigation } from 'src/app/app.component';
import { AuthService } from 'src/app/authorization/auth.service';

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
  service!: AuthService;
}
