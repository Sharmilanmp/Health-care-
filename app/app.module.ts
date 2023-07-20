import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule}from '@angular/common/http';
import {FormsModule}from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule}from '@angular/material/table';
import {MatToolbarModule}from '@angular/material/toolbar';
import {MatSidenavModule}from '@angular/material/sidenav';
import {MatIconModule}from '@angular/material/icon';
import {MatDividerModule}from '@angular/material/divider';
import {MatButtonModule}from '@angular/material/button';
import {MatMenuModule}from '@angular/material/menu';
import {MatCardModule}from '@angular/material/card';
import {MatDialogModule}from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {LoginComponent} from './login/login.component';
import {DoctorSearchComponent} from './doctor-search/doctor-search.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    DashboardComponent,
    DoctorSearchComponent,
    LoginComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    MatSortModule,
    MatPaginatorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
