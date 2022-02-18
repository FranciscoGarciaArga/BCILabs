import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
// Rutas
import { APP_ROUTING } from './app.routes';

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgressComponent } from './components/progress/progress.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SolutionsComponent } from './modals/solutions/solutions.component';
import { PersonalformComponent } from './pages/personalform/personalform.component';
import { CompanyformComponent } from './pages/companyform/companyform.component';
import { ConfimComponent } from './pages/confim/confim.component';
import { PollComponent } from './modals/poll/poll.component';
import { TabGroupStretchedComponent } from './components/tab-group-stretched/tab-group-stretched.component';
import { Ng9RutModule } from 'ng9-rut';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,    
    ProgressComponent, SolutionsComponent, PersonalformComponent, CompanyformComponent, ConfimComponent, PollComponent, TabGroupStretchedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    Ng9RutModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
