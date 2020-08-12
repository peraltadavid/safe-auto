import { Component, OnInit, Input } from '@angular/core';
import { TripDTO } from '../file-input/file-input.component';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss'],
})
export class ResultTableComponent implements OnInit {
  @Input() fileCompileComplete: boolean;
  @Input() error: string;
  @Input() tripDTOs: TripDTO[];

  constructor() {}

  ngOnInit(): void {}

  getTripInfo(trip: TripDTO) {
    return `${trip.name}: ${trip.miles} miles ${
      trip.miles === 0 ? '' : `@ ${trip.mph} mph`
    }`;
  }
}
