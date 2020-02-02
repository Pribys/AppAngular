// Se crea este módulo para descargar de contenido el módulo principal app.module.ts

import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

// ng2 - Charts
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';



@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        PagesComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent

    ],
    // Las exportaciones son necesarias si voy a utilizar estos componentes en algún otro lugar fuera de lo declarado en este módulo
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        FormsModule,
        ChartsModule,
        PAGES_ROUTES
    ]
})
export class PagesModule { }