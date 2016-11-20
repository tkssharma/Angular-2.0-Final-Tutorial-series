import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import ApplicationComponent from './components/application/application';
import CarouselComponent from "./components/carousel/carousel";
import FooterComponent from "./components/footer/footer";
import NavbarComponent from "./components/navbar/navbar";
import HostItemComponent from "./components/host-item/host-item";
import SearchComponent from "./components/search/search";
import StarsComponent from "./components/stars/stars";
import {ProductService} from "./services/product-service";
import {ONLINE_AUCTION_SERVICES} from './services/services';
import HomeComponent from "./components/home/home";
import HostDetailComponent from "./components/Host-detail/host-detail";
import HostLoginComponent from "./components/home/home";
import HostProfileComponent from "./components/home/home";


@NgModule({
    imports:      [ BrowserModule, ReactiveFormsModule,
                    FormsModule, HttpModule,
                    RouterModule.forRoot([
                        {path: '',                    component: HomeComponent},
                        {path: 'host/:hostId', component: HostDetailComponent},
                        {path: 'login', component: HostLoginComponent},
                        {path: 'profile', component: HostProfileComponent}
    ]) ],
    declarations: [ ApplicationComponent,
                    CarouselComponent,
                    FooterComponent,
                    NavbarComponent,
                    HomeComponent,
                    HostDetailComponent,
                    HostItemComponent,
                    SearchComponent,
                    StarsComponent],
    providers:    [ProductService,
                   {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ ApplicationComponent ]
})
export class AppModule { }