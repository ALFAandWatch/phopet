'use client';
import Link from 'next/link';
import { useState } from 'react';

const Productos = () => {
   const [filtro, setFiltro] = useState('todos');

   return (
      <div>
         <div className="flex items-end">
            <h1 className="text-naranja-main text-6xl 2xl:text-8xl font-(family-name:--font-bowlby-one)">
               PRODUCTOS
            </h1>
            <Link
               href="/dashboard/nuevoProducto"
               className="bg-naranja-main text-white font-(family-name:--font-open-sans) rounded-full text-sm font-semibold py-2 px-5 ms-8 mb-2 hover:brightness-115"
            >
               Agregar Nuevo
            </Link>
         </div>
         {/********************** NAV FILTROS *************************/}
         <nav aria-label="Filtros de Productos">
            <ul className="flex gap-4 text-black font-(family-name:--font-open-sans) font-semibold mt-5">
               <li>
                  <button onClick={() => setFiltro('todos')}>Todos</button>
               </li>
               <li>
                  <button onClick={() => setFiltro('publicados')}>
                     Publicados
                  </button>
               </li>
               <li>
                  <button onClick={() => setFiltro('papelera')}>
                     Papelera
                  </button>
               </li>
            </ul>
         </nav>
         {/********************** BOTONES *************************/}
         <div className="flex gap-4 mt-5">
            <button className="bg-gray-400 text-black rounded-full py-2 w-38">
               Acciones en lote
            </button>
            <button className="bg-gray-400 text-black rounded-full py-2 w-38">
               Aplicar
            </button>
            <button className="bg-gray-400 text-black rounded-full py-2 w-38">
               Categoría
            </button>
            <button className="bg-gray-400 text-black rounded-full py-2 w-38">
               Stock
            </button>
         </div>
         {/********************** TABLA PRODUCTOS *************************/}
         <div className="w-full mt-5">
            <table className="min-w-full">
               <thead>
                  <tr className="bg-naranja-main font-(family-name:--font-open-sans) text-xs text-white">
                     <th className="text-left p-2 rounded-l-full"></th>
                     <th className="text-left p-2">Nombre</th>
                     <th className="text-left p-2">SKU</th>
                     <th className="text-left p-2">Stock</th>
                     <th className="text-left p-2">Precio</th>
                     <th className="text-left p-2">Editar</th>
                     <th className="text-left p-2 rounded-r-full">Eliminar</th>
                  </tr>
               </thead>
               <tbody>
                  {/* {productos.map((producto) => (
                  <tr key={producto.id}>
                     <td className="p-2">{producto.nombre}</td>
                     <td className="p-2">${producto.precio}</td>
                     <td className="p-2">{producto.stock}</td>
                  </tr>
               ))} */}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Productos;
