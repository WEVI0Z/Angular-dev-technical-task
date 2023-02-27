import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { Observable, map } from 'rxjs';

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
    protected route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null),
      password: new FormControl(null)
    })

    this.route.queryParams.subscribe(data => this.error = data["error"]);
  }

  submit() {
    this.auth.login(this.form.value["login"], this.form.value["password"])
      .subscribe(user => {
        if(user) {
          this.router.navigate(["product/list"])
        } else {
          this.router.navigate(["user/login"], {
            queryParams: {error: true}
          })
        }
      })
  }
}
