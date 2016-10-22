import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from "./index/index.component";
import { UserComponent } from './user/user.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'user/:id',
        component: UserComponent
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

export const APP_ROUTING_PROVIDERS: any[] = [
];