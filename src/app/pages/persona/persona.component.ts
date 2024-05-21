import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { PersonaInterface } from '../../core/interface/persona.interface';
import { TablaComponent } from '../../components/tabla/tabla.component';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [ListComponent,TablaComponent],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css',
})
export class PersonaComponent implements OnInit {
  personas: PersonaInterface[] = [];
  tituloTabla: string = 'Lista de Personas';
  columnas: string[] = [
    'nombre',
    'fechaNacimiento',
    'tipoDocumento',
    'numeroCelular',
    'email',
    'peso',
  ];

  ngOnInit(): void {
    this.personas = [
      {
        nombre: 'Juanito Perez',
        fechaNacimiento: new Date('2023-04-05'),
        peso: '12-Kg',
        tipoDocumento: 'Cedula de Ciudadania',
        numeroCelular: 3214557743,
        email: '1995jerson@gmail.com',
        numeroDocumento: '123454',
      },
      {
        nombre: 'Carlos Ramirez',
        fechaNacimiento: new Date('2023-04-05'),
        peso: '12-Kg',
        tipoDocumento: 'Cedula de Ciudadania',
        numeroCelular: 3214557743,
        email: '1995jerson@gmail.com',
        numeroDocumento: '123454',
      },
      {
        nombre: 'Juanito Perez',
        fechaNacimiento: new Date('2023-04-05'),
        peso: '12-Kg',
        tipoDocumento: 'Cedula de Ciudadania',
        numeroCelular: 3214557743,
        email: '1995jerson@gmail.com',
        numeroDocumento: '123454',
      },
      {
        nombre: 'Perez Perez',
        fechaNacimiento: new Date('2023-04-05'),
        peso: '12-Kg',
        tipoDocumento: 'Cedula de Ciudadania',
        numeroCelular: 3214557743,
        email: '1995jerson@gmail.com',
        numeroDocumento: '123454',
      },
    ];
    console.log(this.personas)
  }
  
}
