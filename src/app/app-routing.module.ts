//app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventListComponent } from './event-list/event-list.component';

const routes: Routes = [
  {

    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'event/create', component: CreateEventComponent },
    { path: 'events', component: EventListComponent },
      // Add more routes as needed
    ],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

