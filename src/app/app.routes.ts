import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';

export const routes: Routes = [
  // bei Weiterleitung vom leeren Pfad (fast) immer pathmatchFull nötig
  { path: '', redirectTo: 'books/dashboard', pathMatch: 'full' },

  { path: 'books', redirectTo: 'books/dashboard' },
  { path: 'books/dashboard', component: DashboardComponent },
  { path: 'books/details/:isbn', component: BookDetailsComponent },
];
