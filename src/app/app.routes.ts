import { Routes } from '@angular/router';
import { PersonaComponent } from './pages/persona/persona.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

export const routes: Routes = [
  {
    path: 'inicio',
    title: 'Home',
    children: [
      {
        path: '',
        title: 'Home',
        component: InicioComponent,
      },
      {
        path:'persona',
        title:'Persona',
        component: PersonaComponent,
      },
      {
        path: 'imagenes',
        title:'Mis imagenes',
        component: ImagenesComponent,
      },
      {
        path: 'nosotros',
        title: 'Nosotros',
        component: NosotrosComponent,
      },
      {
        path: 'contacto',
        title: 'Contacto',
        component: ContactoComponent,
      },
    ],
  },
];
