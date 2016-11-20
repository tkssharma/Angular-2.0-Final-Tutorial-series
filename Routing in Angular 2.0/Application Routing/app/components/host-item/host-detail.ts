        import {Component} from '@angular/core';
        import {ActivatedRoute} from '@angular/router';
        import {Host, HostService} from '../../services/host-service';
        @Component({
        selector: 'host-detail',
        template: `<auction-host-item [host]="host"></auction-host-item>`,
        })
        export default class HostDetailComponent  {

            hostID: number;
            hosts: Host[] = [];

        constructor(private hostService: HostService,
                        route: ActivatedRoute) {
                this.hostID = route.snapshot.params['id'];
                console.log(this.hostID);
                this.hosts = this.hostService.getHostById(parseInt(this.hostID))
                console.log(this.hosts);
            }
        }


