import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
// Rutas
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ComunidadComponent } from './pages/comunidad/comunidad.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { HomeComponent } from './pages/home/home.component';
import { ReporteRiesgoComponent } from './pages/reporte-riesgo/reporte-riesgo.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ComunidadComponent,
    ReportesComponent,
    HomeComponent,
    ReporteRiesgoComponent,
    EmpresasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
