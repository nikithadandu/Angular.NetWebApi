import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightComponent } from './components/flights/add-flight/add-flight.component';
import { FlightsListComponent } from './components/flights/flights-list/flights-list.component';
import { HomeComponent } from './components/flights/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flights',
    component: FlightsListComponent
  },
  {
    path: 'flights/add',
    component: AddFlightComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
