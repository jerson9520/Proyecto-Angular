import { PATH } from "../core/enum/path.enum";
import { MainInfo } from "../core/interface/main_info.interface";

export const MainRoute : MainInfo[] = [
    {
        path: PATH.HOME,
        title:'Home',
        icon:'fa-solid fa-house',
        classCss:'',
        submenu:[],
    },
    {
        path:PATH.NOSOTROS,
        title:'Nosotros',
        icon:'',
        classCss:'fa-solid fa-users-gear',
        submenu:[],
    },
    {
        path: PATH.PERSONA,
        title:'Persona',
        icon:'',
        classCss:'',
        submenu:[],
    },
    {
        path: PATH.PRODUCTOS,
        title:'Ver Productos',
        icon:'',
        classCss:'',
        submenu:[],
    },
    {
        path:PATH.USUARIO,
        title:'Ver Usuarios',
        icon:'fa-solid fa-image',
        classCss:'',
        submenu:[],
    },
    {
        path:PATH.IMAGEN,
        title:'Imagen',
        icon:'fa-solid fa-image',
        classCss:'',
        submenu:[],
    },
    {
        path: PATH.CONTACTO,
        title:'Contacto',
        icon:'fa-solid fa-address-book',
        classCss:'',
        submenu:[],
    }
];