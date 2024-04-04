import { RouterModule, Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: 'missionlist', pathMatch: 'full' },
    { path: 'missionlist', component: MissionlistComponent },
    { path: 'missiondetails/:mission_flight_number', component: MissiondetailsComponent },
    { path: '**', redirectTo: 'missionlist'}
  ];


  // @NgModule({
  //   imports: [RouterModule.forRoot(routes)],
  //   exports: [RouterModule]
  // })
  // export class AppRoutingModule { }