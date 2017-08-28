import { Component } from '@angular/core';
import { ComponentAComponent } from './component-a.component';
import { ComponentBComponent } from './component-b.component';

const COMPONENTS = {
    A: ComponentAComponent,
    B: ComponentBComponent
};


@Component({
    template: `
        Load component: 
        
        <button (click)="loadComponent('A')">Load A</button>
        <button (click)="loadComponent('B')">Load B</button>
        <div #host></div>    
`
})
export class DynamicComponentLoaderComponent {

    public loadComponent(component: String) {

    }
}
