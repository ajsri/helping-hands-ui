import { Component, OnInit } from '@angular/core'
var services = require('../../mockdata/services.json')


@Component({
    selector: 'map',
    templateUrl: './map.component.pug',
    providers: []
})

export class MapComponent extends OnInit {

    services = services;
    map: any;
    points: any[];
    vm: any;

    buildMap() {

    }
    ngOnInit() {
        var m = document.getElementById('mapContainer');
        var vm = this;

        this.map = L.map(m, {
            center: L.latLng(38.6439633,-90.2565238),
            zoom: 16
        });

        var tileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?', {
            minZoom: 3,
            maxZoom: 18,
        });

        this.services.map((service: any, i: number) => {
            var lat = (service.lat);
            var lon = (service.lon);
            var content = `<div class="popup-content-svc">
                                <p><strong>${service.name}</strong></p>
                                <p>${service.address}</p>
                                <p>${service.phone}</p>
                                <p><strong>Services</strong></p>
                                <p>${service.clothing == 1 ? 'Clothing' : ''}</p>
                                <p>${service.community_services == 1 ? 'Community Services' : ''}</p>
                                <p>${service.counseling == 1 ? 'Counseling' : ''}</p>
                                <p>${service.education == 1 ? 'Education' : ''}</p>
                                <p>${service.emergency_shelter == 1 ? 'Emergency Shelter' : ''}</p>
                                <p>${service.employment_assitance == 1 ? 'Employment Assistance' : ''}</p>
                                <p>${service.food == 1 ? 'Food' : ''}</p>
                                <p>${service.healthcare == 1 ? 'Healthcare' : ''}</p>
                                <p>${service.housing_assistance == 1 ? 'Housing Assistance' : ''}</p>
                                <p>${service.hygience_essentials == 1 ? 'Hygiene Essentials' : ''}</p>
                                <p>${service.legal == 1 ? 'Legal Assistance' : ''}</p>
                                <p>${service.transportation == 1 ? 'Transportation' : ''}</p>
                                <p>${service.utility_assistance == 1 ? 'Utility Assistance' : ''}</p>
                           </div>`
            L.marker([lat, lon]).bindPopup(content).openPopup().addTo(this.map);
        })
        tileLayer.addTo(this.map);
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.map.setView([position.coords.latitude, position.coords.longitude])
                var content = 'Current Position'
                L.marker([position.coords.latitude, position.coords.longitude]).addTo(vm.map)
            })
        }
    }
}