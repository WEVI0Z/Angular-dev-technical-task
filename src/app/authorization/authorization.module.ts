import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
  ],
  providers: [
    AuthService,
    AuthInterceptor,
    AuthGuard,
  ]
})
export class AuthorizationModule { }
