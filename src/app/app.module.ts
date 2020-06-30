import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { RegisterComponent } from './register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularFireModule } from 'angularfire2';                          //for firebase
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { TryfirebaseComponent } from './tryfirebase/tryfirebase.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component'; //for jquery schedule

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    TryfirebaseComponent,
    SchedulerComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SweetAlert2Module,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    jqxSchedulerModule,
    jqxGridModule,
    CommonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
