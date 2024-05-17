export interface info_pagina {
  title?: string;
  equipo?: any[];
  indices?: indice_vulnerabilidad[];
}


export interface indice_vulnerabilidad {
  alcaldia?: string;
  poblacion_total?: number;
  num_reportes_fuga?: number;
  num_reportes_falta_agua?: number;
  num_reportes_encharcamiento?: number;
  num_reportes_desague_pluvial_bloqueado?: number;
  n_riesgo_sequias?: string;
  num_eventos_inundaciones?: number;
  latitud?: number;
  longitud?: number;
  indice_general?: number;
  cluster?: string;
}
