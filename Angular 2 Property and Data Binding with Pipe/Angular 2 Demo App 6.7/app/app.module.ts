import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AppComponent } from './app.component';

import NavbarComponent from './navbar/navbar';
import FooterComponent from './footer/footer';
import { HostListComponent } from './hosts/host-list.component';

@NgModule({
    imports:      [ BrowserModule, ReactiveFormsModule],
    declarations: [ HostListComponent,NavbarComponent,FooterComponent,AppComponent],
    providers:    [
                   {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }