import {
    Component, OnInit, OnDestroy, ViewContainerRef, ViewChild, Type, ReflectiveInjector,
    ComponentFactoryResolver, Injector
} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { ComponentLoaderService } from './component-loader.service';

@Component({
    moduleId: module.id,
    selector: 'dyn-host',
    template: `<ng-template #host></ng-template>`
})
export class DynamicComponentHost implements OnInit, OnDestroy {
    @ViewChild('host', {read: ViewContainerRef}) host: ViewContainerRef;
    component: Type<Component>;
    reflectiveInjector: ReflectiveInjector;
    resolverSub: Subscription;
    componentRef: any; // @TODO change to actual type
    componentFactoryResolver: ComponentFactoryResolver;
    injector: Injector;

    constructor(private componentLoaderService: ComponentLoaderService) {}

    ngOnInit() {
        this.resolverSub = this.componentLoaderService.contextReceived$.subscribe(resolver => {
            this.componentFactoryResolver = resolver.resolver;
            this.injector = resolver.injector;
        });

        this.componentLoaderService.loadComponent$.subscribe(comp => {
            this.loadComponent(comp);
        });
    }

    ngOnDestroy() {
        this.resolverSub.unsubscribe();
        this.clearComponent();
    }

    public loadComponent(component: any) {
        this.clearComponent();

        this.component = component;

        if (this.component) {
            const childComponent = this.componentFactoryResolver.resolveComponentFactory(this.component);
            this.reflectiveInjector = ReflectiveInjector
                .resolveAndCreate([
                    {
                        provide: this.component,
                        useValue: this.component
                    }
                ], this.injector);

            this.componentRef = this.host.createComponent(childComponent, 0 , this.reflectiveInjector);
        }
    }

    private clearComponent() {
        this.host.clear();
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }
}
