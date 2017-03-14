import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule ],
  declarations: [ AppComponent, UserComponent, AboutComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }