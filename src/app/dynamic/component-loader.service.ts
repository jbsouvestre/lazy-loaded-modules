import { Injectable, ComponentFactoryResolver, Injector, Type, Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface ComponentLoadedContext {
    resolver: ComponentFactoryResolver;
    injector: Injector;
}

@Injectable()
export class ComponentLoaderService {
    contextReceivedSource = new Subject<ComponentLoadedContext>();
    contextReceived$ = this.contextReceivedSource.asObservable();

    loadComponentSource = new Subject<Type<Component>>();
    loadComponent$ = this.loadComponentSource.asObservable();

    receiveContext(componentFactoryResolver: ComponentFactoryResolver, injector: Injector) {
        this.contextReceivedSource.next({resolver: componentFactoryResolver, injector: injector});
    }

    loadComponent(component) {
        this.loadComponentSource.next(component);
    }
}
