import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './data.service'; // new
import { FormsModule } from '@angular/forms'; // new
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // new

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // new
    BrowserAnimationsModule // new

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
