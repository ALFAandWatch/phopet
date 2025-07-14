'use client';
import { AtributoType } from '@/types/atributo';
import { ErrorMessage, Field, Formik, FormikHelpers } from 'formik';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { validateNuevoAtributo } from '../../../../utils/validateNuevoAtributo';
import axiosInstance from '@/services/axiosInstance';
import Swal from 'sweetalert2';

const Atributos = () => {
   const [atributos, setAtributos] = useState<AtributoType[]>([]);
   const [formSubmitted, setFormSubmitted] = useState(false);
   const [atributoBeingEdited, setAtributoBeingEdited] = useState<
      number | null
   >(null);
   const [edicionValores, setEdicionValores] = useState('');

   console.log(atributoBeingEdited);

   const fetchAtributos = () => {
      axiosInstance
         .get('atributos/listarAtributos')
         .then((response) => {
            setAtributos(response.data.data);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const handleSubmit = (
      values: AtributoType,
      { setSubmitting, resetForm }: FormikHelpers<AtributoType>
   ) => {
      axiosInstance
         .post('atributos/nuevoatributo', values)
         .then((res) => {
            console.log('Categoría creada:', res.data);
            setSubmitting(false);
            resetForm();
            setFormSubmitted(true);
            setTimeout(() => {
               setFormSubmitted(false);
            }, 2000);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const handleEditarAtributo = (id: number, valores: string) => {
      const valoresArray = valores
         .split(',')
         .map((v) => v.trim())
         .filter((v) => v.length > 0);

      setAtributoBeingEdited(null);

      axiosInstance.patch(`/atributos/editarAtributo/${id}`, {
         valores: valoresArray,
      });
   };

   useEffect(() => {
      fetchAtributos();
   }, []);

   useEffect(() => {
      if (atributoBeingEdited === null) {
         fetchAtributos();
      }
   }, [atributoBeingEdited, formSubmitted]);

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
            {/******************* FORMULARIO NUEVO ATRIBUTO **************************/}
            {/*****************************************************************/}
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
            {/******************* LISTA DE ATRIBUTOS **************************/}
            {/*****************************************************************/}
            <section className="w-120 2xl:w-220 mt-12 2xl:mt-24">
               {atributos && atributos.length > 0 ? (
                  <ul>
                     {atributos.map((atributo) => (
                        <li key={atributo.id} className="mb-5">
                           <div className="bg-white rounded-md shadow-md p-4 flex flex-col font-(family-name:--font-open-sans)">
                              <div className="flex gap-4">
                                 <h2 className=" text-black font-bold">
                                    {atributo.nombre}
                                 </h2>
                                 <button
                                    type="button"
                                    onClick={() => {
                                       setAtributoBeingEdited(atributo.id);
                                       setEdicionValores(
                                          (atributo.valores ?? []).join(', ')
                                       );
                                    }}
                                    className="ms-auto"
                                 >
                                    <Image
                                       src={'/icons/edit_green.svg'}
                                       alt="Editar"
                                       width={25}
                                       height={25}
                                       className="ms-auto"
                                    />
                                 </button>
                                 <button
                                    type="button"
                                    onClick={() =>
                                       Swal.fire({
                                          title: `¿Estás seguro que quieres eliminar el atributo <br/><span style="color: red;">${atributo.nombre}</span>?`,
                                          text: 'Esta acción no se puede deshacer.',
                                          icon: 'warning',
                                          showCancelButton: true,
                                          confirmButtonText: 'Sí, eliminar',
                                          cancelButtonText: 'Cancelar',
                                       }).then((result) => {
                                          if (result.isConfirmed) {
                                             handleEliminarAtributo(
                                                atributo.id
                                             );
                                          }
                                       })
                                    }
                                 >
                                    <Image
                                       src={'/icons/delete_red.svg'}
                                       alt="Borrar"
                                       width={25}
                                       height={25}
                                    />
                                 </button>
                              </div>
                              <div className="mt-4 font-semibold">
                                 {atributoBeingEdited === atributo.id ? (
                                    <div className="flex flex-col gap-2">
                                       <textarea
                                          value={edicionValores}
                                          className="border border-gray-400 text-black p-2"
                                          onChange={(e) =>
                                             setEdicionValores(e.target.value)
                                          }
                                          rows={3}
                                       />
                                       <button
                                          className="text-white font-semibold bg-green-600 p-2 rounded-md"
                                          onClick={() =>
                                             handleEditarAtributo(
                                                atributo.id,
                                                edicionValores
                                             )
                                          }
                                       >
                                          Guardar
                                       </button>
                                    </div>
                                 ) : Array.isArray(atributo.valores) &&
                                   atributo.valores.length > 0 ? (
                                    <p className="text-black">
                                       {atributo.valores.join(', ')}
                                    </p>
                                 ) : (
                                    <p className="text-gray-400 border border-gray-400 p-2 2xl:p-4 rounded-md 2xl:rounded-lg 2xl:text-3xl">
                                       Edita el atributo para agregar valores.
                                    </p>
                                 )}
                              </div>
                           </div>
                        </li>
                     ))}
                  </ul>
               ) : (
                  <p className="text-orange-400 border border-orange-400 p-2 2xl:p-4 rounded-md 2xl:rounded-lg 2xl:text-3xl">
                     No hay atributos disponibles.
                  </p>
               )}
            </section>
         </div>
      </>
   );
};

export default Atributos;
