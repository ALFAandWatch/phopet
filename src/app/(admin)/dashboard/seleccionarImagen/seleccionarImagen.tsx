'use client';

import { useImagenes } from '@/hooks/useImagenes';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const seleccionarImagen = () => {
   const inputRef = useRef<HTMLInputElement | null>(null);
   const [activeTab, setActiveTab] = useState<'archivo' | 'galeria'>('galeria');
   const { imagenes, offset, totalImagenes, fetchImagenes } = useImagenes();
   const [imagenSeleccionada, setImagenSeleccionada] = useState<string | null>(
      null
   );
   const [archivoSeleccionado, setArchivoSeleccionado] = useState<File | null>(
      null
   );
   const [previewUrl, setPreviewUrl] = useState<string | null>(null);

   const router = useRouter();

   const baseUrl = 'http://localhost:3001';

   useEffect(() => {
      fetchImagenes();
   }, []);

   const handleClick = () => {
      inputRef.current?.click();
   };

   const handleArchivoSeleccionado = (
      e: React.ChangeEvent<HTMLInputElement>
   ) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setArchivoSeleccionado(file);
      setPreviewUrl(URL.createObjectURL(file));

      localStorage.setItem('imagenProductoArchivo', URL.createObjectURL(file));
   };

   const handleAplicarFoto = () => {
      if (!imagenSeleccionada) return;

      localStorage.setItem('imagenProductoPreview', imagenSeleccionada);
      router.push('/dashboard/nuevoProducto');
   };

   return (
      <>
         <h1 className="text-naranja-main text-6xl 2xl:text-8xl font-(family-name:--font-bowlby-one)">
            SELECCIONAR IMAGENES
         </h1>
         <div className="flex gap-8 text-white bg-naranja-main font-semibold font-(family-name:--font-open-sans) mt-4 py-2 px-4">
            <button
               onClick={() => setActiveTab('archivo')}
               className={`hover:cursor-pointer ${
                  activeTab === 'archivo' ? 'text-white' : 'opacity-60'
               }`}
            >
               Seleccionar Archivo
            </button>
            <button
               onClick={() => setActiveTab('galeria')}
               className={`hover:cursor-pointer ${
                  activeTab === 'galeria' ? 'text-white' : 'opacity-60'
               }`}
            >
               Galeria de Imagenes
            </button>
            <button
               className="text-white hover:cursor-pointer ms-auto"
               onClick={handleAplicarFoto}
            >
               Aplicar
            </button>
         </div>
         <div>
            {activeTab === 'archivo' && (
               <div className="flex justify-center items-center p-8 bg-white rounded-lg w-full min-h-100 mt-4">
                  {previewUrl ? (
                     <div className="mt-4 w-full flex justify-center">
                        <img
                           src={previewUrl}
                           alt="Vista previa"
                           className="max-w-[300px] h-auto border border-gray-300 rounded-md"
                        />
                     </div>
                  ) : (
                     <>
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
                     </>
                  )}
               </div>
            )}
            {activeTab === 'galeria' && (
               <>
                  <div className="grid grid-cols-5 gap-8 p-8 bg-white rounded-lg w-full min-h-100 h-auto mt-4">
                     {imagenes.map((imagen) => (
                        <div
                           key={imagen.id}
                           className={`flex flex-col items-center justify-center border-4 rounded-md p-2 ${
                              imagenSeleccionada === imagen.url
                                 ? 'border-naranja-main'
                                 : 'border-transparent'
                           }`}
                        >
                           <button
                              type="button"
                              className="hover:cursor-pointer"
                              onClick={() => setImagenSeleccionada(imagen.url)}
                           >
                              <img
                                 src={`${baseUrl}${imagen.url}`}
                                 alt={imagen.nombre}
                                 className="w-full h-auto"
                              />
                           </button>
                        </div>
                     ))}
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
            )}
         </div>
      </>
   );
};

export default seleccionarImagen;
