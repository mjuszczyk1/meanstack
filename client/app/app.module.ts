import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import {AppComponent}     from './app.component';
import { BeersComponent } from './components/beers/beers.component';

@NgModule({
    imports:  [ BrowserModule ],
    declarations: [AppComponent, BeersComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }