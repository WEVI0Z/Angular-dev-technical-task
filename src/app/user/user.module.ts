import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserStoreModule } from './user-store.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
    UserStoreModule,
    ReactiveFormsModule,
    LoginModule,
    RegisterModule,
  ]
})
export class UserModule {}
