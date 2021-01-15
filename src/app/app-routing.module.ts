import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopListComponent } from './components/desktop-list/desktop-list.component';
import { DesktopDetailsComponent } from './components/desktop-details/desktop-details.component';
import { AddDesktopComponent } from './components/add-desktop/add-desktop.component';

const routes: Routes = [
  { path: '', redirectTo: 'desktops', pathMatch: 'full'},
  { path: 'desktops', component: DesktopListComponent},
  { path: 'desktops/:id', component: DesktopDetailsComponent},
  { path: 'add', component: AddDesktopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
