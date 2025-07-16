'use client';

import { useImagenes } from '@/hooks/useImagenes';
import axiosInstance from '@/services/axiosInstance';
import { ImagenType } from '@/types/imagen';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Imagenes = () => {
   const inputRef = useRef<HTMLInputElement | null>(null);
   const [offset, setOffset] = useState(0);
   const [selectImages, setSelectImages] = useState(false);
   const [imagenesSeleccionadas, setImagenesSeleccionadas] = useState<number[]>(
      []
   );

   const { imagenes, totalImagenes, fetchImagenes } = useImagenes();

   const baseUrl = 'http://localhost:3001';

   useEffect(() => {
      fetchImagenes(false);
   }, []);

   const handleArchivoSeleccionado = async (
      e: React.ChangeEvent<HTMLInputElement>
   ) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const formData = new FormData();
      formData.append('imagen', file);

      axiosInstance
         .post('/imagenes/upload', formData)
         .then((res) => {
            const imageUrl = res.data.url;
            fetchImagenes(false);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const handleSeleccion = (id: number) => {
      setImagenesSeleccionadas((prev) =>
         prev.includes(id)
            ? prev.filter((imgId) => imgId !== id)
            : [...prev, id]
      );
   };

   const handleBorrarSeleccionadas = () => {
      if (imagenesSeleccionadas.length === 0) return;

      axiosInstance
         .delete('/imagenes/borrar-multiples', {
            data: { ids: imagenesSeleccionadas },
         })
         .then(() => {
            fetchImagenes();
            setImagenesSeleccionadas([]);
            setSelectImages(false);
         })
         .catch((err) => console.error(err));
   };

   const handleClick = () => {
      inputRef.current?.click();
   };
   return (
      <>
         <h1 className="text-naranja-main text-6xl 2xl:text-8xl font-(family-name:--font-bowlby-one)">
            IMAGENES
         </h1>
         <div className="flex gap-8 text-black font-semibold font-(family-name:--font-open-sans) mt-4">
            <button
               onClick={handleClick}
               className="hover:cursor-pointer text-naranja-main"
            >
               Añadir nueva imagen
            </button>
            <input
               ref={inputRef}
               type="file"
               accept="image/*"
               onChange={handleArchivoSeleccionado}
               className="hidden"
            />
            <button
               onClick={() => setSelectImages(true)}
               className="hover:cursor-pointer"
            >
               Seleccionar por lotes
            </button>
         </div>
         {selectImages && (
            <div className="flex gap-8 text-black font-semibold font-(family-name:--font-open-sans) mt-4">
               <button
                  onClick={handleBorrarSeleccionadas}
                  className="hover:cursor-pointer text-naranja-main"
               >
                  Borrar Imagenes
               </button>
               <button
                  onClick={() => {
                     setSelectImages(false);
                     setImagenesSeleccionadas([]);
                  }}
                  className="hover:cursor-pointer"
               >
                  Cancelar
               </button>
            </div>
         )}
         <div className="grid grid-cols-5 gap-8 p-8 bg-white rounded-lg w-full min-h-100 h-auto mt-4">
            {imagenes.map((imagen, index) => {
               const estaSeleccionada = imagenesSeleccionadas.includes(
                  imagen.id
               );

               return (
                  <div
                     key={index}
                     className={`relative w-full aspect-square ${
                        estaSeleccionada
                           ? 'border-4 border-blue-500 rounded-lg'
                           : 'border-gray-500'
                     }`}
                  >
                     {selectImages && (
                        <input
                           type="checkbox"
                           className="absolute top-2 left-2 z-10 w-5 h-5"
                           checked={imagenesSeleccionadas.includes(imagen.id)}
                           onChange={() => handleSeleccion(imagen.id)}
                        />
                     )}
                     <Image
                        src={`${baseUrl}${imagen.url}`}
                        fill
                        alt={`Imagen ${index + 1}`}
                     />
                  </div>
               );
            })}
         </div>
         <div className="flex justify-center">
            {offset < totalImagenes && (
               <button
                  onClick={() => fetchImagenes(true)}
                  className="mt-8 p-3 w-60 rounded-full bg-naranja-main text-white font-semibold"
               >
                  Cargar más
               </button>
            )}

            {offset >= totalImagenes && totalImagenes > 0 && (
               <button
                  disabled
                  className="mt-8 p-3 w-60 rounded-full bg-naranja-main text-white opacity-50 font-semibold cursor-not-allowed"
               >
                  Cargar Más
               </button>
            )}
         </div>
      </>
   );
};

export default Imagenes;
