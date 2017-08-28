import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentLoaderComponent } from './dynamic-component-loader.component';
import { ComponentAComponent } from './component-a.component';
import { ComponentBComponent } from './component-b.component';
import { ComponentLoaderService } from './component-loader.service';
import { DynamicComponentHost } from './dynamic-component-host.component';
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DynamicComponentLoaderComponent,
        ComponentAComponent,
        ComponentBComponent,
        DynamicComponentHost
    ],
    exports: [
        DynamicComponentLoaderComponent
    ],
    providers: [
        ComponentLoaderService
    ],
    entryComponents: [
        ComponentAComponent,
        ComponentBComponent
    ]
})
export class DynamicModule {}
