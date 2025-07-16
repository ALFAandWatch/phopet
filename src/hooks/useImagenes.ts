import axiosInstance from '@/services/axiosInstance';
import { useState } from 'react';

export function useImagenes(limit = 10) {
   const [imagenes, setImagenes] = useState<any[]>([]);
   const [offset, setOffset] = useState(0);
   const [totalImagenes, setTotalImagenes] = useState(0);

   const fetchImagenes = async (append = false) => {
      const currentOffset = append ? offset : 0;

      try {
         const res = await axiosInstance.get(
            `/imagenes/listarImagenes?offset=${currentOffset}&limit=${limit}`
         );

         const { imagenes: nuevasImagenes, total } = res.data;

         setImagenes((prev) =>
            append ? [...prev, ...nuevasImagenes] : nuevasImagenes
         );
         setTotalImagenes(total);
         setOffset(currentOffset + nuevasImagenes.length);
      } catch (error) {
         console.error('Error al traer imágenes:', error);
      }
   };

   return {
      imagenes,
      totalImagenes,
      offset,
      fetchImagenes,
   };
}
