import { Component, OnInit } from '@angular/core';
import { TripDTO } from '../file-input/file-input.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public fileCompileComplete: boolean;
  public error: string;
  public tripDTOs: TripDTO[];
  constructor() {}

  ngOnInit(): void {}

  onFileCompileCompleteChange(value: boolean) {
    this.fileCompileComplete = value;
  }

  onErrorChange(value: string) {
    this.error = value;
  }

  onTripDTOsChange(value: TripDTO[]) {
    this.tripDTOs = value.sort(this.tripComparator);
  }

  tripComparator(tripA: TripDTO, tripB: TripDTO) {
    return tripB.miles - tripA.miles;
  }
}
