'use client';
import { ErrorMessage, Field, Formik, FieldProps } from 'formik';
import validateNuevoProducto from '@/utils/validateNuevoProducto';
import Image from 'next/image';
import { useState } from 'react';

const nuevoProducto = () => {
   const [navActiveTab, setNavActiveTab] = useState('general');

   const handleSubmit = (values: any) => {
      alert('Valores del formulario: ' + JSON.stringify(values, null, 2));
      // Aquí puedes agregar la lógica para enviar los datos al servidor
   };

   return (
      <>
         <h1 className="text-naranja-main text-6xl 2xl:text-8xl font-(family-name:--font-bowlby-one)">
            NUEVO PRODUCTO
         </h1>
         <Formik
            initialValues={{
               nombre: '',
               slugUrl: '',
               descripcionCorta: '',
               descripcionLarga: '',
               metaTitle: '',
               metaDescription: '',
               tipo: 'SIMPLE',
            }}
            validate={validateNuevoProducto}
            onSubmit={handleSubmit}
         >
            {() => (
               <form
                  onSubmit={handleSubmit}
                  className="font-(family-name:--font-poppins) mt-10 w-full text-sm"
               >
                  <div className="flex gap-6">
                     {/********************** FORMULARIO SECCION IZQUIERDA ******************/}
                     <div className="grow-1">
                        <div className="flex flex-col">
                           <label
                              htmlFor="nombre"
                              className="text-black text-sm"
                           >
                              Nombre del producto
                           </label>
                           <Field
                              type="text"
                              id="nombre"
                              name="nombre"
                              placeholder="Nombre del producto"
                              className="bg-white p-3 2xl:p-4 shadow-md rounded-md text-black placeholder:text-gray-400 mt-2"
                           />
                           <ErrorMessage
                              name="nombre"
                              component="div"
                              className="text-red-500 text-xs 2xl:text-lg font-(family-name:--font-poppins) mt-2 2xl:p-1"
                           />
                        </div>
                        <div className="flex flex-col mt-6">
                           <label htmlFor="slugUrl" className="text-black">
                              Slug URL - sin espacios ni caracteres especiales
                           </label>
                           <Field
                              type="text"
                              id="slugUrl"
                              name="slugUrl"
                              placeholder="Slug"
                              className="bg-white p-3 2xl:p-4 shadow-md rounded-md text-black placeholder:text-gray-400 mt-2"
                           />
                           <ErrorMessage
                              name="slugUrl"
                              component="div"
                              className="text-red-500 text-xs 2xl:text-lg font-(family-name:--font-poppins) mt-2 2xl:p-1"
                           />
                        </div>
                        <div className="flex flex-col mt-6">
                           <label
                              htmlFor="descripcionCorta"
                              className="text-black"
                           >
                              Descripción Corta
                           </label>
                           <Field
                              as="textarea"
                              rows="4"
                              id="descripcionCorta"
                              name="descripcionCorta"
                              placeholder="Descripción corta"
                              className="bg-white p-3 2xl:p-4 shadow-md rounded-md text-black placeholder:text-gray-400 mt-2"
                           />
                           <ErrorMessage
                              name="descripcionCorta"
                              component="div"
                              className="text-red-500 text-xs 2xl:text-lg font-(family-name:--font-poppins) mt-2 2xl:p-1"
                           />
                        </div>
                        <div className="flex flex-col mt-6">
                           <label
                              htmlFor="descripcionLarga"
                              className="text-black"
                           >
                              Descripción Larga
                           </label>
                           <Field
                              as="textarea"
                              rows="4"
                              id="descripcionLarga"
                              name="descripcionLarga"
                              placeholder="Descripción larga"
                              className="bg-white p-3 2xl:p-4 shadow-md rounded-md text-black placeholder:text-gray-400 mt-2"
                           />
                           <ErrorMessage
                              name="descripcionLarga"
                              component="div"
                              className="text-red-500 text-xs 2xl:text-lg font-(family-name:--font-poppins) mt-2 2xl:p-1"
                           />
                        </div>
                        <div className="flex flex-col mt-6">
                           <label htmlFor="metaTitle" className="text-black">
                              SEO - Meta Title - 50 caracteres
                           </label>
                           <Field
                              type="text"
                              id="metaTitle"
                              name="metaTitle"
                              placeholder="Nombre del producto"
                              className="bg-white p-3 2xl:p-4 shadow-md rounded-md text-black placeholder:text-gray-400 mt-2"
                           />
                           <ErrorMessage
                              name="metaTitle"
                              component="div"
                              className="text-red-500 text-xs 2xl:text-lg font-(family-name:--font-poppins) mt-2 2xl:p-1"
                           />
                        </div>
                        <div className="flex flex-col mt-6">
                           <label
                              htmlFor="metaDescription"
                              className="text-black"
                           >
                              SEO - Meta Description - 150 caracteres
                           </label>
                           <Field
                              type="text"
                              id="metaDescription"
                              name="metaDescription"
                              placeholder="Descripción corta"
                              className="bg-white p-3 2xl:p-4 shadow-md rounded-md text-black placeholder:text-gray-400 mt-2"
                           />
                           <ErrorMessage
                              name="metaDescription"
                              component="div"
                              className="text-red-500 text-xs 2xl:text-lg font-(family-name:--font-poppins) mt-2 2xl:p-1"
                           />
                        </div>
                        <div className="mt-6">
                           <h2 className="text-black">Datos del producto</h2>
                           <div className="flex mt-2">
                              <div className=" flex items-center gap-6">
                                 {/* Toggle SIMPLE */}
                                 <div className="bg-white rounded-md shadow-md p-2">
                                    <div className="flex items-center gap-3">
                                       <label className="text-black">
                                          Simple
                                       </label>
                                       <Field name="tipo" id="tipo">
                                          {({ field, form }: FieldProps) => (
                                             <div className="bg-gray-300 p-1 rounded-full">
                                                <button
                                                   type="button"
                                                   role="switch"
                                                   aria-checked={
                                                      field.value === 'SIMPLE'
                                                   }
                                                   onClick={() =>
                                                      form.setFieldValue(
                                                         'tipo',
                                                         'SIMPLE'
                                                      )
                                                   }
                                                   className={`w-12 h-6 flex items-center rounded-full transition-colors duration-300 ${
                                                      field.value === 'SIMPLE'
                                                         ? 'bg-blue-500'
                                                         : 'bg-gray-500'
                                                   }`}
                                                >
                                                   <div
                                                      className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                                                         field.value ===
                                                         'SIMPLE'
                                                            ? 'translate-x-6'
                                                            : ''
                                                      }`}
                                                   />
                                                </button>
                                             </div>
                                          )}
                                       </Field>
                                    </div>
                                 </div>

                                 {/* Toggle VARIABLE */}
                                 <div className="bg-white rounded-md shadow-md p-2">
                                    <div className="flex items-center gap-3">
                                       <label className="text-black">
                                          Variable
                                       </label>
                                       <Field name="tipo" id="tipo">
                                          {({ field, form }: FieldProps) => (
                                             <div className="bg-gray-300 p-1 rounded-full">
                                                <button
                                                   type="button"
                                                   role="switch"
                                                   aria-checked={
                                                      field.value === 'VARIABLE'
                                                   }
                                                   onClick={() =>
                                                      form.setFieldValue(
                                                         'tipo',
                                                         'VARIABLE'
                                                      )
                                                   }
                                                   className={`w-12 h-6 flex items-center rounded-full transition-colors duration-300 ${
                                                      field.value === 'VARIABLE'
                                                         ? 'bg-blue-500'
                                                         : 'bg-gray-500'
                                                   }`}
                                                >
                                                   <div
                                                      className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                                                         field.value ===
                                                         'VARIABLE'
                                                            ? 'translate-x-6'
                                                            : ''
                                                      }`}
                                                   />
                                                </button>
                                             </div>
                                          )}
                                       </Field>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="flex mt-6 h-80 gap-4">
                           <div className="bg-naranja-main p-4 w-60 rounded-md shadow-md">
                              <nav role="tablist">
                                 <ul>
                                    <li>
                                       <button
                                          role="tab"
                                          type="button"
                                          aria-selected={
                                             navActiveTab === 'general'
                                          }
                                          onClick={() =>
                                             setNavActiveTab('general')
                                          }
                                          className={`p-1 px-2 ${
                                             navActiveTab === 'general' &&
                                             'bg-white text-naranja-main rounded-sm'
                                          }`}
                                       >
                                          General
                                       </button>
                                    </li>
                                    <li>
                                       <button
                                          role="tab"
                                          type="button"
                                          aria-selected={
                                             navActiveTab === 'inventario'
                                          }
                                          onClick={() =>
                                             setNavActiveTab('inventario')
                                          }
                                          className={`p-1 px-2 ${
                                             navActiveTab === 'inventario' &&
                                             'bg-white text-naranja-main rounded-sm'
                                          }`}
                                       >
                                          Inventario
                                       </button>
                                    </li>
                                    <li>
                                       <button
                                          role="tab"
                                          type="button"
                                          aria-selected={
                                             navActiveTab === 'atributos'
                                          }
                                          onClick={() =>
                                             setNavActiveTab('atributos')
                                          }
                                          className={`p-1 px-2 ${
                                             navActiveTab === 'atributos' &&
                                             'bg-white text-naranja-main rounded-sm'
                                          }`}
                                       >
                                          Atributos
                                       </button>
                                    </li>
                                    <li>
                                       <button
                                          role="tab"
                                          type="button"
                                          aria-selected={
                                             navActiveTab === 'variaciones'
                                          }
                                          onClick={() =>
                                             setNavActiveTab('variaciones')
                                          }
                                          className={`p-1 px-2 ${
                                             navActiveTab === 'variaciones' &&
                                             'bg-white text-naranja-main rounded-sm'
                                          }`}
                                       >
                                          Variaciones
                                       </button>
                                    </li>
                                 </ul>
                              </nav>
                           </div>
                           <div className="grow-1">
                              {/* TAB GENERAL */}
                              <div
                                 className={`flex flex-col gap-4 ${
                                    navActiveTab === 'general'
                                       ? 'block'
                                       : 'hidden'
                                 }`}
                              >
                                 <div className="flex flex-col">
                                    <Field
                                       type="number"
                                       id="precioNormal"
                                       name="precioNormal"
                                       placeholder="Precio normal ($)"
                                       className="bg-white p-3 2xl:p-4 shadow-md rounded-md text-black placeholder:text-gray-400"
                                    />
                                    <ErrorMessage
                                       name="precioNormal"
                                       component="div"
                                       className="text-red-500 text-xs 2xl:text-lg font-(family-name:--font-poppins) mt-2 2xl:p-1"
                                    />
                                 </div>
                                 <div className="flex flex-col">
                                    <Field
                                       type="text"
                                       id="precioRebajado"
                                       name="precioRebajado"
                                       placeholder="Precio rebajado ($)"
                                       className="bg-white p-3 2xl:p-4 shadow-md rounded-md text-black placeholder:text-gray-400"
                                    />
                                    <ErrorMessage
                                       name="precioRebajado"
                                       component="div"
                                       className="text-red-500 text-xs 2xl:text-lg font-(family-name:--font-poppins) mt-2 2xl:p-1"
                                    />
                                 </div>
                              </div>
                              {/* TAB INVENTARIO */}
                              <div
                                 className={`flex flex-col gap-4 ${
                                    navActiveTab === 'inventario'
                                       ? 'block'
                                       : 'hidden'
                                 }`}
                              >
                                 <div className="flex flex-col">
                                    <Field
                                       type="number"
                                       id="sku"
                                       name="sku"
                                       placeholder="SKU"
                                       className="bg-white p-3 2xl:p-4 shadow-md rounded-md text-black placeholder:text-gray-400"
                                    />
                                    <ErrorMessage
                                       name="sku"
                                       component="div"
                                       className="text-red-500 text-xs 2xl:text-lg font-(family-name:--font-poppins) mt-2 2xl:p-1"
                                    />
                                 </div>
                                 <div className="bg-white shadow-md p-4">
                                    <div className="flex p-2">
                                       <Field
                                          type="checkbox"
                                          id="hayStock"
                                          name="hayStock"
                                          className="me-2"
                                       />
                                       <label
                                          htmlFor="hayStock"
                                          className="text-black"
                                       >
                                          Hay Stock
                                       </label>
                                    </div>
                                    <div className="flex p-2">
                                       <Field
                                          type="checkbox"
                                          id="agotado"
                                          name="agotado"
                                          className="me-2"
                                       />
                                       <label
                                          htmlFor="agotado"
                                          className="text-black"
                                       >
                                          Agotado
                                       </label>
                                    </div>
                                 </div>
                              </div>
                              {/* TAB ATRIBUTOS */}
                              <div
                                 className={`flex flex-col gap-4 ${
                                    navActiveTab === 'atributos'
                                       ? 'block'
                                       : 'hidden'
                                 }`}
                              >
                                 <div className="flex gap-4">
                                    <Field
                                       type="text"
                                       name="atributo"
                                       placeholder="Agregar atributo"
                                       className="bg-white p-3 2xl:p-4 shadow-md rounded-md text-black placeholder:text-gray-400"
                                    />
                                    <button
                                       type="button"
                                       className="bg-verde-ok p-3 2xl:p-4 shadow-md rounded-md text-black hover:cursor-pointer hover:brightness-115"
                                    >
                                       Agregar
                                    </button>
                                 </div>
                                 <div className="bg-white shadow-md p-4 flex">
                                    <Field
                                       type="checkbox"
                                       id="marcas"
                                       name="marcas"
                                       className="me-2"
                                    />
                                    <label
                                       htmlFor="marcas"
                                       className="text-black"
                                    >
                                       Marcas
                                    </label>
                                 </div>
                                 <div className="bg-white shadow-md p-4 flex">
                                    <Field
                                       type="checkbox"
                                       id="razas"
                                       name="razas"
                                       className="me-2"
                                    />
                                    <label
                                       htmlFor="razas"
                                       className="text-black"
                                    >
                                       Razas
                                    </label>
                                 </div>
                              </div>
                              {/* TAB VARIACIONES */}
                              <div
                                 className={`flex flex-col gap-4 ${
                                    navActiveTab === 'variaciones'
                                       ? 'block'
                                       : 'hidden'
                                 }`}
                              >
                                 <div className="flex gap-4">
                                    <Field
                                       type="text"
                                       name="variacion"
                                       placeholder="Agregar variación"
                                       className="bg-white p-3 2xl:p-4 shadow-md rounded-md text-black placeholder:text-gray-400"
                                    />
                                    <button
                                       type="button"
                                       className="bg-verde-ok p-3 2xl:p-4 shadow-md rounded-md text-black hover:cursor-pointer hover:brightness-115"
                                    >
                                       Agregar
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/********************** FORMULARIO SECCION DERECHA ******************/}
                     <div className="flex flex-col gap-4 w-70">
                        <div className="w-full">
                           <h2 className="text-black">Publicar</h2>
                           <div className="bg-white h-35 rounded-md shadow-md p-5 mt-2">
                              <p className="inline text-gray-400 text-sm">
                                 Estado:Publicado
                              </p>
                              <button className="inline text-gray-400 text-sm ms-3">
                                 Editar
                              </button>
                              <div className="flex justify-center items-center h-full">
                                 <button
                                    type="submit"
                                    className="bg-verde-ok p-1 block w-full rounded-full font-semibold"
                                 >
                                    PUBLICAR
                                 </button>
                              </div>
                           </div>
                        </div>
                        <div>
                           <h2 className="text-black">Imagen del producto</h2>
                           <div className="bg-white h-35 rounded-md shadow-md p-5 mt-2">
                              <div className="w-full h-full relative">
                                 <Image
                                    src="/producto.png"
                                    alt="Imagen del producto"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-contain"
                                 ></Image>
                              </div>
                           </div>
                        </div>
                        <div>
                           <h2 className="text-black">Galeria del producto</h2>
                           <div className="bg-white h-35 rounded-md shadow-md p-5 mt-2"></div>
                        </div>
                        <div>
                           <h2 className="text-black">
                              Categorías del producto
                           </h2>
                           <div className="bg-white h-35 rounded-md shadow-md p-5 mt-2"></div>
                        </div>
                     </div>
                  </div>
               </form>
            )}
         </Formik>
      </>
   );
};

export default nuevoProducto;
