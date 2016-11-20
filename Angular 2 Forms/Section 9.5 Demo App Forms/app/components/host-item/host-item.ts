import {Component, Input} from '@angular/core';
import {Host} from '../../services/host-service';

@Component({
  selector: 'auction-product-item',
  styleUrls: [ 'app/components/host-item/host-item.css' ],
  templateUrl: 'app/components/host-item/host-item.html'
})
export default class HostItemComponent {
  @Input() host: Host;
}
