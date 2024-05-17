import { Component } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css',
})
export class ReportesComponent {
  alcaldias: any[] = [
    {
      id: 1,
      alcaldia: 'Iztapalapa',
    },
    {
      id: 2,
      alcaldia: 'Coyoacán',
    },
    {
      id: 3,
      alcaldia: 'Gustavo A. Madero',
    },
    {
      id: 4,
      alcaldia: 'Tlalpan',
    },
    {
      id: 5,
      alcaldia: 'Álvaro Obregón',
    },
    {
      id: 6,
      alcaldia: 'Azcapotzalco',
    },
    {
      id: 7,
      alcaldia: 'Benito Juárez',
    },
    {
      id: 8,
      alcaldia: 'Cuajimalpa de Morelos',
    },
    {
      id: 9,
      alcaldia: 'Cuauhtémoc',
    },
    {
      id: 10,
      alcaldia: 'Iztacalco',
    },
    {
      id: 11,
      alcaldia: 'La Magdalena Contreras',
    },
    {
      id: 12,
      alcaldia: 'Miguel Hidalgo',
    },
    {
      id: 13,
      alcaldia: 'Milpa Alta',
    },
    {
      id: 14,
      alcaldia: 'Tláhuac',
    },
    {
      id: 15,
      alcaldia: 'Venustiano Carranza',
    },
    {
      id: 16,
      alcaldia: 'Xochimilco',
    },
  ];
}
