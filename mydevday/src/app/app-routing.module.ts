import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { DayComponent } from './components/pages/day/day.component';
import { EditDayComponent } from './components/pages/edit-day/edit-day.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewDayComponent } from './components/pages/new-day/new-day.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'mydevday/new', component: NewDayComponent},
  {path: 'mydevday/edit/:id', component: EditDayComponent},
  {path: 'mydevdays/:id', component: DayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
