import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCharacterComponent } from './main-character/main-character.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainCharacterDetailComponent } from './main-character-detail/main-character-detail.component';

const routes: Routes = [
  { path: 'main-characters', component: MainCharacterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: MainCharacterDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
