import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {

}
