import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ROUTING, APP_ROUTING_PROVIDERS } from "./route/app.routing";
import { AppComponent } from "./app.component";
import { IndexComponent } from "./route/index/index.component";

@NgModule({
    imports: [
        BrowserModule,
        ROUTING
    ],
    declarations: [
        AppComponent,
        IndexComponent
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