import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from "./index/index.component";

const APP_ROUTES: Routes = [
    {
        path: '',
        component: IndexComponent
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

export const APP_ROUTING_PROVIDERS: any[] = [
];