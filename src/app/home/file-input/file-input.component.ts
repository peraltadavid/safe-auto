import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
})
export class FileInputComponent implements OnInit {
  file: File;
  constructor() {}

  ngOnInit(): void {}

  onFileInputChange(file: File) {
    this.file = file;
  }
}
