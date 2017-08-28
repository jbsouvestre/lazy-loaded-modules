import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { DynamicModule } from '../dynamic/dynamic.module';
@NgModule({
    imports: [
        HomeRoutingModule,

        DynamicModule
    ],
    declarations: [
        HomeComponent
    ],
})
export class HomeModule {

}

export function loadHomeModule() {
    console.log('load children');
    return HomeModule;
}
