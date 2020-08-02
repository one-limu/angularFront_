import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { ShellModule1 } from './shell.1/shell.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { LoginModule1 } from './login.1/login.module';
import { AppComponent } from './app.component';
import { MemberareaModule } from './memberarea/memberarea.module';
import { MemberareaModule1 } from './memberarea.1/memberarea.module';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor } from './core/http/jwt-interceptor';
import { PaginationDDirective } from './directive/pagination-d.directive';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeId from '@angular/common/locales/id'; 
registerLocaleData(localeId, 'id'); 


@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    ShellModule1,
    HomeModule,
    AboutModule,
    LoginModule,
    LoginModule1,
    MemberareaModule,
    MemberareaModule1,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent, PaginationDDirective],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },  { provide: LOCALE_ID, useValue: "id-ID" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
