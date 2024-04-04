import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SpacexService } from '../network/spacex.service';
import { Observable } from 'rxjs';
import { MissionData} from '../models/mission';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [NgFor, MissionfilterComponent],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css',
})
export class MissionlistComponent implements OnInit {
  fetchData: MissionData[] = [];
  filteredMissionList: MissionData[] = []

  constructor(private spaceXService: SpacexService, private router: Router) { }

  
  ngOnInit() {
    this.spaceXService.getMissionList().subscribe((data:  MissionData[]) => {
      this.fetchData = data;
      this.filteredMissionList = data
    });
  }
  
  filterByYear(year: number) {
    console.log('Filtered year:', year); 

    if (year) {
      this.filteredMissionList = this.fetchData.filter(
        (mission) => mission.launch_year === year.toString()
      );
    } else {
      this.filteredMissionList = this.fetchData;
    }
  }


  showDetails(flightNumber: string) {
    this.router.navigate(['/missiondetails', flightNumber]);
  }






}