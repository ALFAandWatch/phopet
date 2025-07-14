'use client';
import { AtributoType } from '@/types/atributo';
import { ErrorMessage, Field, Formik } from 'formik';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { validateNuevoAtributo } from '../../../../utils/validateNuevoAtributo';
import axiosInstance from '@/services/axiosInstance';

const Atributos = () => {
   const [atributos, setAtributos] = useState<AtributoType[]>([]);

   const fetchAtributos = () => {
      axiosInstance
         .get('atributos/listarAtributos')
         .then((response) => {
            setAtributos(response.data);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const handleSubmit = () => {};

   const handleEditarAtributo = () => {};

   useEffect(() => {
      fetchAtributos();
   }, []);

   const handleEliminarAtributo = (id: number) => {
      axiosInstance
         .delete(`/atributos/eliminarAtributo/${id}`)
         .then(() => {
            fetchAtributos();
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <>
         <h1 className="text-naranja-main text-6xl 2xl:text-8xl font-(family-name:--font-bowlby-one)">
            ATRIBUTOS
         </h1>
         <div className="flex gap-10 2xl:gap-20 mt-10 h-full">
            <section className="w-70 2xl:w-140">
               <Formik
                  initialValues={{
                     id: 0,
                     nombre: '',
                     slugUrl: '',
                  }}
                  validate={validateNuevoAtributo}
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
                              Nombre del atributo
                           </label>
                           <Field
                              type="text"
                              name="nombre"
                              id="nombre"
                              placeholder="Nombre del atributo"
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
                        <button
                           type="submit"
                           disabled={isSubmitting}
                           className="w-fit bg-orange-500 text-white text-sm 2xl:text-3xl py-2 2xl:py-4 px-5 2xl:px-10 rounded-full font-semibold font-(family-name:--open-sans) mt-9 hover:cursor-pointer hover:brightness-115"
                        >
                           Agregar Nuevo Atributo
                        </button>
                     </form>
                  )}
               </Formik>
            </section>
            <section className="w-120 2xl:w-220 mt-12 2xl:mt-24">
               {atributos && atributos.length > 0 ? (
                  <ul>
                     {atributos.map((atributo) => (
                        <li>
                           <div className="bg-white rounded-md shadow-md p-4 flex flex-col">
                              <div className="flex">
                                 <h2>{atributo.nombre}</h2>
                                 <button
                                    type="button"
                                    onClick={() => handleEditarAtributo}
                                 >
                                    <Image
                                       src={'/icons/edit_green.svg'}
                                       alt="Editar"
                                       width={20}
                                       height={20}
                                       className="ms-auto"
                                    />
                                 </button>
                                 <button
                                    type="button"
                                    onClick={() =>
                                       handleEliminarAtributo(atributo.id)
                                    }
                                 >
                                    <Image
                                       src={'/icons/delete_red.svg'}
                                       alt="Borrar"
                                       width={20}
                                       height={20}
                                    />
                                 </button>
                              </div>
                              <div>
                                 <p>{atributo.valores.join(', ')}</p>
                              </div>
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
};

export default Atributos;
