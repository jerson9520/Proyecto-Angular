import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  personas = [
    {
      nombre: 'Juan',
      edad: 30,
      ciudad: 'Bogotá',
      documento: 12345,
    },
    {
      nombre: 'María',
      edad: 25,
      ciudad: 'Medellín',
      documento: 67890,
    },
    {
      nombre: 'Pedro',
      edad: 28,
      ciudad: 'Cali',
      documento: 54321,
    },
    {
      nombre: 'Ana',
      edad: 22,
      ciudad: 'Cartagena',
      documento: 98765,
    },
    {
      nombre: 'Luis',
      edad: 35,
      ciudad: 'Barranquilla',
      documento: 13579,
    },
    {
      nombre: 'Carolina',
      edad: 27,
      ciudad: 'Bucaramanga',
      documento: 24680,
    },
    {
      nombre: 'Andrés',
      edad: 33,
      ciudad: 'Pereira',
      documento: 97531,
    },
    {
      nombre: 'Laura',
      edad: 24,
      ciudad: 'Villavicencio',
      documento: 86420,
    },
    {
      nombre: 'Diego',
      edad: 29,
      ciudad: 'Cúcuta',
      documento: 75319,
    },
    {
      nombre: 'Valentina',
      edad: 26,
      ciudad: 'Santa Marta',
      documento: 10293,
    },
  ];
}
