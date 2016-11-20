import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import ApplicationComponent from './components/application/application';
import HomeComponent from './components/home/home';
import FooterComponent from './components/footer/footer';
import NavbarComponent from './components/navbar/navbar';
import HostDetailComponent from './components/host-detail/host-detail';
import HostItemComponent from './components/host-item/host-item';
import SearchComponent from './components/search/search';
import StarsComponent from './components/stars/stars';
import {HostService} from './services/host-service';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot([
        {path: '',                    component: HomeComponent},
        {path: 'hosts/:hostId', component: HostDetailComponent}
      ])
  ],
  declarations: [
      ApplicationComponent,
      FooterComponent,
      HomeComponent,
      NavbarComponent,
      HostDetailComponent,
      HostItemComponent,
      SearchComponent,
      StarsComponent
  ],
  providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy },
      HostService
  ],
  bootstrap: [ ApplicationComponent ]
})
export class AppModule {}
