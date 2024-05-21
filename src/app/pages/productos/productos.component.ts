import { Component, OnInit } from '@angular/core';
import { ProductosInterface } from '../../core/interface/productos.interface';
import { TablaComponent } from "../../components/tabla/tabla.component";

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
  columnas: string[] = [
    'nombre',
    'sku',
    'cantidad',
    'precio',
  ];

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
  ]
  }
}
