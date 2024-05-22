import { Component, OnInit } from '@angular/core';
import { ProductosInterface } from '../../core/interface/productos.interface';
import { TablaComponent } from "../../components/tabla/tabla.component";
import Swal from 'sweetalert2';

@Component({
    selector: 'app-productos',
    standalone: true,
    templateUrl: './productos.component.html',
    styleUrl: './productos.component.css',
    imports: [TablaComponent]
})
export class ProductosComponent implements OnInit{
  
  misProductos: ProductosInterface [] = [];
  titulo: string = 'Lista de Productos'
  columnas: string [] = [];
  informacion: any; 

  ngOnInit(): void {
    this.misProductos = [
      {
      nombre: 'Escritorio Gamer',
      sku: 'adsfsdf55sdfsdf',
      cantidad: 12,
      precio: 460.000
      },
      {
        nombre: 'Mouse Gamer',
        sku: 'adsfsdf55sdfsdf',
        cantidad: 22,
        precio: 460.000
      },
      {
        nombre: 'Diadema Gamer',
        sku: 'adsfsdf55sdfsdf',
        cantidad: 2,
        precio: 6760.000
      },
      {
        nombre: 'Monitor Gamer',
        sku: 'adsfsdf55sdfsdf',
        cantidad: 72,
        precio: 1260.000
      },
      {
        nombre: 'Sonido Gamer',
        sku: 'adsfsdf55sdfsdf',
        cantidad: 52,
        precio: 234460.000
      },
      {
        nombre: 'Case Gamer',
        sku: 'adsfsdf55sdfsdf',
        cantidad: 342,
        precio: 300.000
      },  
  ];
    this.obtenerColumnas(this.misProductos);
  }

  obtenerColumnas(productos: ProductosInterface[]){
    if(productos.length > 0) {
      this.columnas = Object.keys(productos[0]);
    }
  }

  recibirInformacion(data: any) {
    this.informacion = data;
    Swal.fire({
      title: 'Producto',
      html: `<ul class="list-group">
              <li class="list-group-item text-start">Nombre: ${data.nombre}</li>
              <li class="list-group-item text-start">Código: ${data.sku}</li>
              <li class="list-group-item text-start">Cantidad: ${data.cantidad}</li>
              <li class="list-group-item text-start">Precio: ${data.precio}</li>
            </ul>`,
      icon: 'success',
    });
  }
}
