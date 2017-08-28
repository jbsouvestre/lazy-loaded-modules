import {
    Component, ComponentFactoryResolver, Injector, AfterViewInit
} from '@angular/core';
import { ComponentAComponent } from './component-a.component';
import { ComponentBComponent } from './component-b.component';
import { ComponentLoaderService } from './component-loader.service';


const COMPONENTS = {
    A: ComponentAComponent,
    B: ComponentBComponent
};

@Component({
    template: `
        Load component: 
        <button (click)="loadComponent('A')">Load A</button>
        <button (click)="loadComponent('B')">Load B</button>
        <dyn-host></dyn-host>
`
})
export class DynamicComponentLoaderComponent implements AfterViewInit {
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector,
        private componentLoaderService: ComponentLoaderService
    ) { }

    ngAfterViewInit() {
        this.componentLoaderService.receiveContext(this.componentFactoryResolver, this.injector);
    }

    loadComponent(key: string) {
        this.componentLoaderService.loadComponent(COMPONENTS[key]);
    }
}
