import { Routes } from '@angular/router';
import { PersonaComponent } from './pages/persona/persona.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { PATH } from './core/enum/path.enum';

export const routes: Routes = [
  {
    path: PATH.HOME,
    title: 'Home',
    children: [
      {
        path: PATH.HOME,
        title: 'Home',
        component: InicioComponent,
      },
      {
        path:PATH.PERSONA,
        title:'Persona',
        component: PersonaComponent,
      },
      {
        path: PATH.IMAGEN,
        title:'Mis imagenes',
        component: ImagenesComponent,
      },
      {
        path: PATH.NOSOTROS,
        title: 'Nosotros',
        component: NosotrosComponent,
      },
      {
        path: PATH.CONTACTO,
        title: 'Contacto',
        component: ContactoComponent,
      },
    ],
  },
];
