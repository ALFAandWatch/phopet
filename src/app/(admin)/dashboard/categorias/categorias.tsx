'use client';
import { Formik, Field, ErrorMessage, FormikHelpers } from 'formik';
import validateNuevaCategoria from '../../../../utils/validateNuevaCategoria';
import { useEffect, useState } from 'react';
import { CategoriaType } from '@/types/categoria';
import axiosInstance from '@/services/axiosInstance';
import Image from 'next/image';
import Swal from 'sweetalert2';

export default function Categorias() {
   const [categorias, setCategorias] = useState<CategoriaType[]>([]);
   const [formSubmitted, setFormSubmitted] = useState(false);

   const fetchCategorias = () => {
      axiosInstance
         .get('categorias/listarCategorias')
         .then((response) => {
            setCategorias(response.data.data);
         })
         .catch((err) => {
            console.log('Ha ocurrido un error al traer las categorias: ', err);
         });
   };

   useEffect(() => {
      if (formSubmitted) {
         fetchCategorias();
      }
   }, [formSubmitted]);

   useEffect(() => {
      fetchCategorias();
   }, []);

   const handleSubmit = (
      values: CategoriaType,
      { setSubmitting, resetForm }: FormikHelpers<CategoriaType>
   ) => {
      axiosInstance
         .post('categorias/nuevaCategoria', values)
         .then((response) => {
            console.log('Categoría creada:', response.data);
            setSubmitting(false);
            resetForm();
            setFormSubmitted(true);
            setTimeout(() => {
               setFormSubmitted(false);
            }, 2000);
         })
         .catch((error) => {
            console.error('Error al crear la categoría:', error);
         });
   };

   const handleBorrarCategoria = (id: number) => {
      axiosInstance
         .delete(`/categorias/borrarCategoria/${id}`)
         .then((response) => {
            console.log('Categoría eliminada:', response.data);
            fetchCategorias();
         })
         .catch((error) => {
            console.error('Error al eliminar la categoría:', error);
         });
   };

   return (
      <>
         <h1 className="text-orange-500 text-6xl 2xl:text-8xl font-(family-name:--font-bowlby-one)">
            CATEGORÍAS
         </h1>
         <div className="flex gap-10 2xl:gap-20 mt-10 h-full">
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
                  {({ isSubmitting, handleSubmit }) => (
                     <form
                        onSubmit={handleSubmit}
                        className="text-sm 2xl:text-3xl"
                     >
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
                              className="bg-white p-3 2xl:p-4 shadow-md rounded-md text-black placeholder:text-gray-400 mt-2"
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
                              className="bg-white p-3 2xl:p-4 shadow-md rounded-md text-black placeholder:text-gray-400 mt-2"
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
                              className="bg-white p-3 2xl:p-4 shadow-md rounded-md text-black placeholder:text-gray-400 mt-2"
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
                        <li key={categoria.id}>
                           <div className="bg-white p-3 mb-5 text-black text-xs flex items-center shadow-md rounded-xl">
                              {categoria.nombre}
                              <button
                                 className="ms-auto"
                                 onClick={() => {
                                    Swal.fire({
                                       title: `¿Estás seguro que quieres editar la categoría <br/><span style="color: red">${categoria.nombre}</span>?`,
                                    });
                                 }}
                              >
                                 <Image
                                    src="/icons/edit_green.svg"
                                    alt="Editar"
                                    width={24}
                                    height={24}
                                    className="cursor-pointer"
                                 />
                              </button>
                              <button
                                 onClick={() =>
                                    Swal.fire({
                                       title: `¿Estás seguro que quieres eliminar la categoria <br/><span style="color: red;">${categoria.nombre}</span>?`,
                                       text: 'Esta acción no se puede deshacer.',
                                       icon: 'warning',
                                       showCancelButton: true,
                                       confirmButtonText: 'Sí, eliminar',
                                       cancelButtonText: 'Cancelar',
                                    }).then((result) => {
                                       if (result.isConfirmed) {
                                          handleBorrarCategoria(categoria.id);
                                       }
                                    })
                                 }
                              >
                                 <Image
                                    src="/icons/delete_red.svg"
                                    alt="Eliminar"
                                    width={24}
                                    height={24}
                                    className="ms-2 cursor-pointer"
                                 />
                              </button>
                           </div>
                        </li>
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
