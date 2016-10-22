import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ROUTING, APP_ROUTING_PROVIDERS } from "./route/app.routing";
import { AppComponent } from "./app.component";
import { IndexComponent } from "./route/index/index.component";
import { UserList } from './route/userlist/userlist.component';
import { UserComponent } from './route/user/user.component';
import { EmploymentEducationComponent } from './route/user/employment-education/employment-education.component';

@NgModule({
    imports: [
        BrowserModule,
        ROUTING
    ],
    declarations: [
        AppComponent,
        IndexComponent,
        UserList,
        UserComponent,
        EmploymentEducationComponent
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