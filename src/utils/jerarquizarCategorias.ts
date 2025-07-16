import { CategoriaType } from '@/types/categoria';

export type CategoriaConIndent = CategoriaType & {
   hijos?: CategoriaConIndent[];
   indent: number;
};

export const jerarquizarCategorias = (
   categorias: CategoriaType[],
   parentId: number | null = null,
   nivel = 0
): CategoriaConIndent[] => {
   return categorias
      .filter((cat) => cat.parentId === parentId)
      .map((cat) => ({
         ...cat,
         indent: nivel,
         hijos: jerarquizarCategorias(categorias, cat.id, nivel + 1),
      }));
};
