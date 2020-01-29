// Se crea este módulo para descargar de contenido el módulo principal app.module.ts

import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PAGES_ROUTES } from './pages.routes';




@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        PagesComponent,
        Graficas1Component

    ],
    // Las exportaciones son necesarias si voy a utilizar estos componentes en algún otro lugar fuera de lo declarado en este módulo
    exports: [
        DashboardComponent,
        ProgressComponent,
        PagesComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})
export class PagesModule { }