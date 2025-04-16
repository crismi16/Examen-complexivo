import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { AboutYouComponent } from './pages/about-you/about-you.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'tickets', component: TicketsComponent },
    { path: 'about-you', component: AboutYouComponent },
    { path: 'not-found', component: NotFoundComponent },
];
