import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonaInterface } from '../../core/interface/persona.interface';
import { CommonModule } from '@angular/common';
import { ProductosInterface } from '../../core/interface/productos.interface';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent implements OnInit{


  @Input() data: any [] = [];
  @Input() titulo: string = '';
  @Input() columnas: string[] = [];
  
  @Output() onInformacion: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    // this.columnas.push('acciones')
    // console.log("Personas en el componente Hijo", this.data);
  }

  formatearNombreDeColumnas(columna: string): string {
    //Dividir el nombre  por mayusculas y unir con espacios
    return columna.replace(/([a-z])([A-Z])/g, '$1 $2').toLocaleUpperCase();
  } 

  isFecha(value: any) : boolean {
    return value instanceof Date;
  }

  enviarInformacion(data: any) {

    console.log("Data componente hijo", data )
    //emite un evento con la informacion de data  
    this.onInformacion.emit(data);
  }
}
