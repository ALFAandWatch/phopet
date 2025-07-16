import { EstadoProducto } from '@/enums/EstadoProducto';
import { TipoProducto } from '@/enums/TipoProducto';
import { AtributoType } from './atributo';

export type ProductoFormType = {
   id?: number;
   nombre: string;
   slugUrl: string;
   descripcionCorta?: string;
   descripcionLarga?: string;
   metaTitle: string;
   metaDescription: string;
   precioNormal: string;
   precioRebajado: string;
   sku: string;
   disponibilidad: boolean;
   imagenUrl?: string;
   estado: EstadoProducto;
   tipo: TipoProducto;
   atributos: AtributoType[];
};
