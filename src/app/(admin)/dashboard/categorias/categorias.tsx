'use client';
import { Formik, Field, ErrorMessage, FormikHelpers } from 'formik';
import validateNuevaCategoria from '../../../../utils/validateNuevaCategoria';
import { useEffect, useState } from 'react';
import { CategoriaType } from '@/types/categoria';
import axiosInstance from '@/services/axiosInstance';

export default function Categorias() {
   const [categorias, setCategorias] = useState<CategoriaType[]>([]);

   useEffect(() => {
      axiosInstance
         .get('categorias/listarCategorias')
         .then((response) => {
            setCategorias(response.data.data);
            console.log(response.data.data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   const handleSubmit = (
      values: CategoriaType,
      { setSubmitting }: FormikHelpers<CategoriaType>
   ) => {
      console.log('Nueva categoría:', values);
   };

   return (
      <>
         <h1 className="text-orange-500 text-6xl 2xl:text-8xl font-(family-name:--font-bowlby-one)">
            CATEGORÍAS
         </h1>
         <div className="flex gap-10 2xl:gap-20 mt-10">
            <section className="w-70 2xl:w-140">
               <Formik
                  initialValues={{
                     id: 0,
                     nombre: '',
                     slugUrl: '',
                     categoriaPadre: '',
                  }}
                  validate={validateNuevaCategoria}
                  onSubmit={handleSubmit}
               >
                  {({ isSubmitting }) => (
                     <form className="text-sm 2xl:text-3xl">
                        ``
                        <div className="flex flex-col">
                           <label
                              htmlFor="nombre"
                              className="text-black font-(family-name:--font-poppins) 2xl:p-2"
                           >
                              Nombre de la categoría
                           </label>
                           <Field
                              type="text"
                              name="nombre"
                              id="nombre"
                              placeholder="Nombre de la categoría"
                              className="bg-white p-2 2xl:p-4 shadow-md rounded-md text-black placeholder:text-gray-400 mt-2"
                           />
                           <ErrorMessage
                              name="nombre"
                              component="div"
                              className="text-red-500 text-xs 2xl:text-lg font-(family-name:--font-poppins) mt-2 2xl:p-1"
                           />
                        </div>
                        <div className="flex flex-col mt-7">
                           <label
                              htmlFor="slugUrl"
                              className="text-black font-(family-name:--font-poppins) 2xl:p-2"
                           >
                              Slug URL
                           </label>
                           <Field
                              type="text"
                              name="slugUrl"
                              id="slugUrl"
                              placeholder="Slug"
                              className="bg-white p-2 2xl:p-4 shadow-md rounded-md text-black placeholder:text-gray-400 mt-2"
                           />
                           <ErrorMessage
                              name="slugUrl"
                              component="div"
                              className="text-red-500 text-xs 2xl:text-lg font-(family-name:--font-poppins) mt-2 2xl:p-1"
                           />
                        </div>
                        <div className="flex flex-col mt-7">
                           <label
                              htmlFor="categoriaPadre"
                              className="text-black font-(family-name:--font-poppins) 2xl:p-2"
                           >
                              Categoría Padre
                           </label>
                           <Field
                              type="text"
                              name="categoriaPadre"
                              id="categoriaPadre"
                              placeholder="Categoría Padre (opcional)"
                              className="bg-white p-2 2xl:p-4 shadow-md rounded-md text-black placeholder:text-gray-400 mt-2"
                           />
                           <ErrorMessage
                              name="categoriaPadre"
                              component="div"
                              className="text-red-500 text-xs 2xl:text-lg font-(family-name:--font-poppins) mt-2 2xl:p-1"
                           />
                        </div>
                        <button
                           type="submit"
                           disabled={isSubmitting}
                           className="w-fit bg-orange-500 text-white text-sm 2xl:text-3xl py-2 2xl:py-4 px-5 2xl:px-10 rounded-full font-semibold font-(family-name:--open-sans) mt-9 hover:cursor-pointer hover:brightness-115"
                        >
                           Agregar Nueva Categoría
                        </button>
                     </form>
                  )}
               </Formik>
            </section>
            <section className="w-120 2xl:w-220 mt-12 2xl:mt-24">
               {categorias && categorias.length > 0 ? (
                  <ul>
                     {categorias.map((categoria) => (
                        <li key={categoria.id}>{categoria.nombre}</li>
                     ))}
                  </ul>
               ) : (
                  <p className="text-orange-400 border border-orange-400 p-2 2xl:p-4 rounded-md 2xl:rounded-lg 2xl:text-3xl">
                     No hay categorías disponibles.
                  </p>
               )}
            </section>
         </div>
      </>
   );
}
