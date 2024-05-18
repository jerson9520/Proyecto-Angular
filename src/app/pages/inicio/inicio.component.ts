import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ImagenesComponent } from '../imagenes/imagenes.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink, ImagenesComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',

})
export class InicioComponent {

  
  constructor(private router:Router){}

  cambioRuta(){
    this.router.navigateByUrl('/persona')
  }

  abrirModal(){
    Swal.fire('Mi nuevo Modal');
  }
}