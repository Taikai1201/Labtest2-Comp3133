import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MissionDetail, MissionData} from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  private api = 'https://api.spacexdata.com/v3/launches';

  constructor(private https: HttpClient) { }

  getMissionList(): Observable< MissionData[]> {
    return this.https.get< MissionData[]>(this.api);
  }

  getMissionListByFlightNumber(flightNumber: string): Observable<MissionDetail> {
    return this.https.get<MissionDetail>(`${this.api}/${flightNumber}`);
  }

  getMissionListByYear(year: string): Observable< MissionData[]> {
    return this.https.get< MissionData[]>(`${this.api}?launch_year=${year}`);
  }
}
