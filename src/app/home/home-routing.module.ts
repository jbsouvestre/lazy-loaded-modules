import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicComponentLoaderComponent } from '../dynamic/dynamic-component-loader.component';
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: DynamicComponentLoaderComponent
            }
        ])
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
