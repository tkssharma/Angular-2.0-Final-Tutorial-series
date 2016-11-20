import {Component} from '@angular/core';

import NavbarComponent from '../navbar/navbar';
import FooterComponent from '../footer/footer';
import HomeComponent from '../home/home';

@Component({
  selector: 'host-application',
  templateUrl: 'app/components/application/application.html',
  directives: [
    NavbarComponent,
    FooterComponent,
    HomeComponent

  ]
})

export default class ApplicationComponent {}


