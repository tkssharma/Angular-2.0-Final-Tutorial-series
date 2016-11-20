import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import ApplicationComponent from './components/application/application';
import CarouselComponent from "./components/carousel/carousel";
import FooterComponent from "./components/footer/footer";
import NavbarComponent from "./components/navbar/navbar";
import HostItemComponent from "./components/host-item/host-item";
import StarsComponent from "./components/stars/stars";
import {HostService} from "./services/host-service";
import HomeComponent from "./components/home/home";
import LoginComponent from "./components/login/login";
import ProfileComponent from "./components/profile/profile";
import HostDetailComponent from "./components/host-item/host-detail";

@NgModule({
    imports:      [ BrowserModule, ReactiveFormsModule,
                       RouterModule.forRoot([
                        {path: '',    component: HomeComponent},
                        {path: 'login', component: LoginComponent},
                        {path: 'profile', component: ProfileComponent},
                        {path: 'host/:id', component: HostDetailComponent}
    ]) ],
    declarations: [ ApplicationComponent,CarouselComponent,FooterComponent,
                    NavbarComponent,HomeComponent,HostItemComponent,
                    LoginComponent,ProfileComponent,HostDetailComponent,StarsComponent],
    providers:    [HostService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ ApplicationComponent ]
})
export class AppModule { }