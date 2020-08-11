import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UiModule } from '../ui/ui.module';
import { FileInputComponent } from './file-input/file-input.component';

@NgModule({
  declarations: [HomeComponent, FileInputComponent],
  imports: [CommonModule, UiModule],
})
export class HomeModule {}
