import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionfilterComponent {
  years: number[] = Array.from( {length: 2021 - 2007 }, (_, i) => 2007 + 1);
  selectedYear: number = 2007;

  @Output() yearSelected: EventEmitter<number> = new EventEmitter<number>();

  onYearSelect(year: number){
    this.selectedYear = year;
    this.yearSelected.emit(year)
  }


}
