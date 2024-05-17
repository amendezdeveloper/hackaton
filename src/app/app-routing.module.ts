import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComunidadComponent } from './pages/comunidad/comunidad.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { ReporteRiesgoComponent } from './pages/reporte-riesgo/reporte-riesgo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'comunidad', component: ComunidadComponent},
  {path: 'reportes', component: ReportesComponent},
  {path: 'reporte-riesgo', component: ReporteRiesgoComponent },
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
