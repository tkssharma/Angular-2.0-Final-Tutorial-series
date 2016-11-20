import {Component} from '@angular/core';

import {Host, HostService} from '../../services/host-service';
import HostItemComponent from '../host-item/host-item';

@Component({
  selector: 'auction-home-page',
  providers: [HostService],
  styleUrls: ['app/components/home/home.css'],
  template: `
    <div class="row">
      <div *ngFor="let host of hosts" class="col-sm-4 col-lg-4 col-md-4">
        <auction-product-item [host]="host"></auction-product-item>
      </div>
    </div>
  `
})
export default class HomeComponent {
  hosts: Host[] = [];

  constructor(private hostService: HostService) {
    this.hosts = this.hostService.getHosts();
  }
}
