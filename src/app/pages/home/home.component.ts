import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  mm_anio: number = 676;
  metros_cuadrados: number = 0;
  ahorro: number = 0;

  calcularAhorro() {
    this.ahorro = this.mm_anio * this.metros_cuadrados;
  }

}
