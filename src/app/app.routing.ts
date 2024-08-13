import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
 // { path: '/', redirectTo: '/Home' },
  { path: 'Home', component: HomeComponent },//,canActivate: [OutsideService] 
  { path: 'Home/:Id', component: HomeComponent },//,canActivate: [OutsideService] 
  { path: 'About', component: AboutComponent },
  { path: '404', component: PageNotFoundComponent }
  ,{ path: '**', redirectTo: 'Home' }
 // ,{ path: '', redirectTo: '/login', pathMatch: 'full'}
]; 

export const AppRoute = RouterModule.forRoot(routes); 
/*, canDeactivate: [CanDeactivateGuard]*/