import { Component, OnInit } from '@angular/core';
import { PersonaInterface } from '../../core/interface/persona.interface';
import { TablaComponent } from '../../components/tabla/tabla.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent implements OnInit {
  informacionUsuario: any;
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

    this.obtenerColumnas(this.usuarios);
  }

  obtenerColumnas(usuarios: PersonaInterface[]) {
    this.columnas = Object.keys(usuarios[0]);
  }

  recibirInfoUsuarios(usuario: PersonaInterface){
    this.informacionUsuario = usuario;
    console.log("esta es la info del usuario",this.informacionUsuario)
    Swal.fire({
      title: 'Usuario',
      html: `<ul class="list-group">
              <li class="list-group-item text-start">Nombre: ${usuario.nombre}</li>
              <li class="list-group-item text-start">Nacimiento: ${usuario.fechaNacimiento}</li>
              <li class="list-group-item text-start">Tipo Documento: ${usuario.tipoDocumento}</li>
              <li class="list-group-item text-start">Documento: ${usuario.numeroDocumento}</li>
              <li class="list-group-item text-start">Celular: ${usuario.numeroCelular}</li>
              <li class="list-group-item text-start">Email: ${usuario.email}</li>
              <li class="list-group-item text-start">Peso: ${usuario.peso}</li>
            </ul>`,
      icon: 'success',
    });
  }
}
