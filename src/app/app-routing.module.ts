import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import HomeRoutes from './home/home.routes';

const routes: Routes = [...HomeRoutes];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
