import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { SelectionComponent } from './components/selection/selection.component';
import { StartupComponent } from './components/startup/startup.component';
import { TimeComponent } from './components/time/time.component';
import { RoomviewComponent } from './components/roomview/roomview.component';

const routes: Routes = [
    { path: '', component: StartupComponent},
    {path: 'time', component: TimeComponent},
    { path: 'rooms', component: SelectionComponent},
    { path: 'details', component: DetailsComponent},
    { path: 'roomview', component: RoomviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
