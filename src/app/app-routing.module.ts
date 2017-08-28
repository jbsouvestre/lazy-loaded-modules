import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { loadHomeModule } from './home/home.module';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                pathMatch: 'full',
                loadChildren: loadHomeModule
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
