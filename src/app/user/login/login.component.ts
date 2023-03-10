import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/user/store/reducer';
import { login } from 'src/app/user/store/actions';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  error: boolean = false

  constructor (
    private router: Router,
    protected route: ActivatedRoute,
    private store: Store<{user: UserState}>
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(null),
      password: new FormControl(null)
    })

    this.route.queryParams.subscribe(data => this.error = data["error"]);
  }

  submit() {
    const user: User = {
      login: this.form.value["login"],
      password: this.form.value["password"]
    }

    this.store.dispatch(login(user));
  }
}
