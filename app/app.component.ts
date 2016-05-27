import { Component, provide } from 'angular2/core';
import { HTTP_PROVIDERS, XHRBackend } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import 'rxjs/Rx'; // load the full rxjs

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})

export class AppComponent { }
