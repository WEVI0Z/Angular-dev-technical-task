import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodsModule } from './goods/goods.module';
import { ProductModule } from './product/product.module';
import { InMemoryDataService } from './shared/in-memory-data.service';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user/reducer';
import { UserEffects } from './store/user/effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    GoodsModule,
    ProductModule,
    SharedModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    StoreModule.forRoot({user: userReducer}),
    EffectsModule.forRoot([UserEffects]),

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
