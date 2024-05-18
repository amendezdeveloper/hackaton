import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { info_pagina, indice_vulnerabilidad } from '../interfaces/indice_vulnerabilidad';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: info_pagina = {};
  cargada = false;

  constructor(private http: HttpClient) {
    this.cargarIndices();
  }

  private cargarIndices() {
    this.http
      .get('assets/data/indice_vulnerabilidad.json')
      .subscribe((resp: any) => {
        this.info.indices = resp;
        this.cargada = true;
        //console.log(this.info.indices);
      });
  }

  // private cargarEquipo() {
  //   // Leer el archivo JSON
  //   this.http
  //     .get('https://angular-html-25cf9.firebaseio.com/equipo.json')
  //     .subscribe((resp: any[]) => {
  //       this.equipo = resp;
  //       // console.log(resp);
  //     });

  //   // this.equipo = resp
  // }
}
