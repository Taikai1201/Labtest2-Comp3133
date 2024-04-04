import { NgFor } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'; // Import MatSelectModule



@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [FormsModule, NgFor, MatSelectModule],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionfilterComponent {
  years: number[] = Array.from({ length: 2021 - 2006 }, (_, i) => 2006 + i);
  selectedYear: number = 2006;

  @Output() yearSelected: EventEmitter<number> = new EventEmitter<number>();

  onYearSelect(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedYear = parseInt(target.value, 10);
    this.selectedYear = selectedYear;
    this.yearSelected.emit(selectedYear);
    console.log('Selected year:', selectedYear); 

  }



}
