import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'map',
    templateUrl: './map.component.pug',
    providers: []
})

export class MapComponent extends OnInit {
    
    map: any;

    ngOnInit() {
        var m = document.getElementById('mapContainer');

        this.map = L.map(m, {
            center: L.latLng(38.636, -90.248),
            zoom: 16,
            dragging: false
        });

        var tileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?', {
            minZoom: 3,
            maxZoom: 18,
        });


        tileLayer.addTo(this.map);

        // this.map = new L.map(m,
        //     {drawControl: true})
        //     .setView([38.6362117,-90.2489548], 16);
        //
        // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        //     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        // }).addTo(this.map);
    }
}