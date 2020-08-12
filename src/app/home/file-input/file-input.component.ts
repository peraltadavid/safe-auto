import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BackEndService } from 'src/app/back-end.service';

export interface TripDTO {
  name: string;
  miles: number;
  mph: number;
}

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
})
export class FileInputComponent implements OnInit {
  file: File;
  @Output() fileCompileCompleteChange: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  @Output() errorChange: EventEmitter<string> = new EventEmitter<string>();

  @Output() tripDTOsChange: EventEmitter<TripDTO[]> = new EventEmitter<
    TripDTO[]
  >();

  constructor(private BackEndService: BackEndService) {}

  ngOnInit(): void {}

  onFileInputChange(file: File) {
    this.file = file;
  }

  uploadFile() {
    this.BackEndService.uploadAndCompileFile(this.file)
      .subscribe(
        (value) => {
          this.errorChange.emit(null);
          this.tripDTOsChange.emit(value as TripDTO[]);
        },
        (error) => {
          this.errorChange.emit(error.error);
        }
      )
      .add(() => {
        this.fileCompileCompleteChange.emit(true);
      });
  }
}
