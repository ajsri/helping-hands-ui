import { NgModule } from "@angular/core";
import { HttpModule } from '@angular/http';
import { BrowserModule } from "@angular/platform-browser";

import { ROUTING, APP_ROUTING_PROVIDERS } from "./route/app.routing";
import { AppComponent } from "./app.component";
import { IndexComponent } from "./route/index/index.component";
import { UserList } from './route/userlist/userlist.component';
import { UserComponent } from './route/user/user.component';
import { EmploymentEducationComponent } from './route/user/employment-education/employment-education.component';
import { DisabilitiesComponent } from './route/user/disabilities/disabilities.component';
import { HealthandDVComponent } from './route/user/healthanddv/healthanddv.component';
import { MapComponent } from './route/map/map.component';

@NgModule({
    imports: [
        BrowserModule,
        ROUTING,
        HttpModule
    ],
    declarations: [
        AppComponent,
        IndexComponent,
        UserList,
        UserComponent,
        EmploymentEducationComponent,
        DisabilitiesComponent,
        HealthandDVComponent,
        MapComponent
    ],
    providers: [
        APP_ROUTING_PROVIDERS
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}