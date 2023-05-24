import { Component } from '@angular/core';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent {
  nombreCompleto: string = 'Erick Alejandro Perez Espinoza';
  departamentoOrigen: string = 'Carazo';
  ciudadOrigen: string = 'Jinotepe';
  ciudadActual: string = 'Managua';
}
