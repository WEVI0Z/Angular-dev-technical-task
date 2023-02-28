import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/store/user/reducer';
import { login } from 'src/app/store/user/actions';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;
  error: boolean = false;

  constructor (
    private auth: AuthService,
    private router: Router,
    protected route: ActivatedRoute,
    private store: Store<{user: UserState}>
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null),
      password: new FormControl(null)
    })

    this.route.queryParams.subscribe(data => this.error = data["error"]);

  }

  ngAfterViewChecked() {
    this.store.select("user").subscribe(user => {
      if(user.user) {
        this.router.navigate(["product/list"])
      }
    })
  }

  submit() {
    const user: User = {
      login: this.form.value["login"],
      password: this.form.value["password"]
    }

    this.store.dispatch(login(user));
  }
}
