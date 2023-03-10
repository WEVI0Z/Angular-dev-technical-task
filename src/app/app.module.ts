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
import { AuthInterceptor } from './authorization/interceptors/auth.interceptor';
import { AppStoreModule } from './app-store.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { InfoModule } from './shared/info/info.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AuthorizationModule,
    BrowserModule,
    AppRoutingModule,
    UserModule,
    GoodsModule,
    InfoModule,
    ProductModule,
    SharedModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
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
