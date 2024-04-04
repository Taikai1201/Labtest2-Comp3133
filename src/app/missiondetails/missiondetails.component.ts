import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SpacexService } from '../network/spacex.service';
import { MissionDetail } from '../models/mission';


@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [NgIf],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})
export class MissiondetailsComponent {

  mission: MissionDetail = {} as MissionDetail;
  

  mission_flight_number = history.state.mission_flight_number

  constructor(private spaceXService: SpacexService) { }

  ngOnInit() {
    this.spaceXService.getMissionListByFlightNumber(this.mission_flight_number).subscribe((data: MissionDetail) => {
      this.mission = data;
    });
  }
}
