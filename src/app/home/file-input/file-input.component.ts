import { Component, OnInit } from '@angular/core';
import { BackEndService } from 'src/app/back-end.service';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
})
export class FileInputComponent implements OnInit {
  file: File;
  constructor(private BackEndService: BackEndService) {}

  ngOnInit(): void {}

  onFileInputChange(file: File) {
    this.file = file;
  }

  uploadFile() {
    this.BackEndService.uploadAndCompileFile(this.file).subscribe((value) => {
      console.log(value);
    });
  }
}
