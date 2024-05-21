import { Component } from '@angular/core';
import { PersonaInterface } from '../../core/interface/persona.interface';
import { TablaComponent } from '../../components/tabla/tabla.component';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent {
  usuarios: PersonaInterface[] = [];
  columnas: string[] = [
    'nombre',
    'fechaNacimiento',
    'tipoDocumento',
    'numeroCelular',
    'email',
    'peso',
  ];

  ngOnInit(): void {
    this.usuarios = [
      {
        nombre: 'Lupita anuel',
        fechaNacimiento: new Date('2022-10-23'),
        tipoDocumento: 'ARg3467',
        numeroCelular: 125345345,
        email: 'dsdsdfd@dassdsdf',
        numeroDocumento: '234234',
        peso: '67kg',
      },
      {
        nombre: 'Lupita anuel',
        fechaNacimiento: new Date('2022-10-23'),
        tipoDocumento: 'ARg3467',
        numeroCelular: 125345345,
        email: 'dsdsdfd@dassdsdf',
        numeroDocumento: '234234',
        peso: '67kg',
      },
      {
        nombre: 'Lupita anuel',
        fechaNacimiento: new Date('2022-10-23'),
        tipoDocumento: 'ARg3467',
        numeroCelular: 125345345,
        email: 'dsdsdfd@dassdsdf',
        numeroDocumento: '234234',
        peso: '67kg',
      },
      {
        nombre: 'Lupita anuel',
        fechaNacimiento: new Date('2022-10-23'),
        tipoDocumento: 'ARg3467',
        numeroCelular: 125345345,
        email: 'dsdsdfd@dassdsdf',
        numeroDocumento: '234234',
        peso: '67kg',
      },
      {
        nombre: 'Lupita anuel',
        fechaNacimiento: new Date('2022-10-23'),
        tipoDocumento: 'ARg3467',
        numeroCelular: 125345345,
        email: 'dsdsdfd@dassdsdf',
        numeroDocumento: '234234',
        peso: '67kg',
      },
      {
        nombre: 'Lupita anuel',
        fechaNacimiento: new Date('2022-10-23'),
        tipoDocumento: 'ARg3467',
        numeroCelular: 125345345,
        email: 'dsdsdfd@dassdsdf',
        numeroDocumento: '234234',
        peso: '67kg',
      },
    ];
  }
}
