import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-reporte-riesgo',
  templateUrl: './reporte-riesgo.component.html',
  styleUrl: './reporte-riesgo.component.css'
})
export class ReporteRiesgoComponent {
  i = 0;
  constructor(public _infoTabla: InfoPaginaService){

  }
}
