import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from "./index/index.component";
import { UserComponent } from './user/user.component';
import { MapComponent } from './map/map.component';
import { ShelterComponent } from './shelter/shelter.component'

const APP_ROUTES: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'user/:id',
        component: UserComponent
    },
    {
        path: 'map',
        component: MapComponent
    },
    {
        path: 'shelter/:id',
        component: ShelterComponent
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

export const APP_ROUTING_PROVIDERS: any[] = [
];