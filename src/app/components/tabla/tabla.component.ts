import { Component, Input, OnInit } from '@angular/core';
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
  
  ngOnInit(): void {
    console.log("Personas en el componente Hijo", this.data);

  }
}
