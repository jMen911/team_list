import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerCreationComponent } from './player-creation/player-creation.component';
import { HomeComponent } from './home/home.component';
import { TeamListComponent } from './team-list/team-list.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'team-list', component: TeamListComponent },
  { path: 'player-creation', component: PlayerCreationComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
