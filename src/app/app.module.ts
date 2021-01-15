import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDesktopComponent } from './components/add-desktop/add-desktop.component';
import { DesktopDetailsComponent } from './components/desktop-details/desktop-details.component';
import { DesktopListComponent } from './components/desktop-list/desktop-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddDesktopComponent,
    DesktopDetailsComponent,
    DesktopListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
