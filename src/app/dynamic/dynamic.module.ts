import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentLoaderComponent } from './dynamic-component-loader.component';
import { ComponentAComponent } from './component-a.component';
import { ComponentBComponent } from './component-b.component';
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DynamicComponentLoaderComponent,
        ComponentAComponent,
        ComponentBComponent
    ],
    exports: [
        DynamicComponentLoaderComponent
    ]
})
export class DynamicModule {}
