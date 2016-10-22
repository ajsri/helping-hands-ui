import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'map',
    templateUrl: './map.component.pug',
    providers: []
})

export class MapComponent extends OnInit {
    constructor() {
    }

    ngOnInit() {
        // create a map in the "map" div, set the view to a given place and zoom
        var map = L.map('mapContainer', {drawControl: true}).setView([51.505, -0.09], 13);

// add an OpenStreetMap tile layer
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }
}