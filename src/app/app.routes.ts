import { Routes } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';
import { ImagenesComponent } from './imagenes/imagenes.component';

export const routes: Routes = [
    {
        path:'persona',
        title:'Personas',
        component: PersonaComponent
    },
    {
        path:'imagenes',
        title:'Imagenes',
        component: ImagenesComponent
    },
];
