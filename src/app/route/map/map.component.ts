import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'map',
    templateUrl: './map.component.pug',
    providers: []
})

export class MapComponent extends OnInit {

    map: any;
    points: any[];
    vm: any;

    ngOnInit() {
        var m = document.getElementById('mapContainer');
        var vm = this;

        this.map = L.map(m, {
            center: L.latLng(38.636, -90.248),
            zoom: 16
        });

        var tileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?', {
            minZoom: 3,
            maxZoom: 18,
        });

        L.marker([38.636, -90.248]).addTo(this.map);
        tileLayer.addTo(this.map);

        this.map.on('click', (e: any) => {
            L.marker([e.latlng.lat, e.latlng.lng]).addTo(this.map);
        });
    }
}