import { RouterModule, Routes } from '@angular/router';
import { CompanyformComponent } from './pages/companyform/companyform.component';
import { ConfimComponent } from './pages/confim/confim.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonalformComponent } from './pages/personalform/personalform.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'personal', component: PersonalformComponent },
    { path: 'company', component: CompanyformComponent },
    { path: 'confirm', component: ConfimComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
  ];

  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});