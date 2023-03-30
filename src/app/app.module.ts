import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeePortalComponent } from './components/Employees/employee-portal/employee-portal.component';
import { AuthGuard } from './guards/auth.guard';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { EmployeeService } from './services/employee.service';
import { NgChartsModule } from 'ng2-charts';
import { EmployeeCrudComponent } from './components/Employees/employee-portal/employee-crud/employee-crud.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from './services/shared.service';
import { EmployeeInterceptor } from './interceptors/employee.interceptor';
import { HomeComponent } from './components/home/home.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    EmployeePortalComponent,
    EmployeeCrudComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    TabsModule,
    NgbModule,
    MatCardModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    EmployeeService,
    SharedService,
    { provide: HTTP_INTERCEPTORS, useClass: EmployeeInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
