import { Injectable, ComponentFactoryResolver, Injector } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ComponentLoaderService {
    contextReceivedSource = new Subject<any>();
    contextReceived$ = this.contextReceivedSource.asObservable();

    loadComponentSource = new Subject<any>();
    loadComponent$ = this.loadComponentSource.asObservable();

    receiveContext(componentFactoryResolver: ComponentFactoryResolver, injector: Injector) {
        this.contextReceivedSource.next({resolver: componentFactoryResolver, injector: injector});
    }

    loadComponent(component) {
        this.loadComponentSource.next(component);
    }
}
