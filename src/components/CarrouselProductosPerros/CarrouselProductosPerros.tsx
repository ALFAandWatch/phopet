'use client';
import productosPerros from '@/helpers/productos-perros';
import ProductoCard from '../ProductoCard/ProductoCard';
import { useRef } from 'react';
import Image from 'next/image';

const CarrouselProductosPerros = () => {
   const containerRef = useRef<HTMLDivElement>(null);

   const scroll = (direction: 'left' | 'right') => {
      const container = containerRef.current;
      if (!container) return;

      const scrollAmount = container.offsetWidth / 1.2; // puede ajustar esto

      container.scrollBy({
         left: direction === 'left' ? -scrollAmount : scrollAmount,
         behavior: 'smooth',
      });
   };

   return (
      <>
         <div className="w-full flex flex-col mt-10 gap-3">
            <h2 className="text-black text-lg">Alimentos para Perros</h2>
            <div className="relative">
               <button
                  onClick={() => scroll('left')}
                  className="absolute -left-9 top-1/2 -translate-y-1/2 bg-violet-700 border-2 border-white w-12 h-12 rounded-full shadow p-2 z-10 flex justify-center items-center"
               >
                  <Image
                     src="/icons/arrow-right.png"
                     alt="Derecha"
                     width={14}
                     height={14}
                     className=" object-contain -scale-x-100"
                  />
               </button>
               <div
                  ref={containerRef}
                  className="w-full flex flex-start flex-nowrap gap-5 overflow-hidden"
               >
                  {productosPerros.map((producto, index) => (
                     <ProductoCard
                        key={index}
                        index={index}
                        producto={producto}
                     />
                  ))}
               </div>
               <button
                  onClick={() => scroll('right')}
                  className="absolute -right-9 top-1/2 -translate-y-1/2 bg-violet-700 border-2 border-white w-12 h-12 rounded-full shadow p-2 z-10 flex justify-center items-center"
               >
                  <Image
                     src="/icons/arrow-right.png"
                     alt="Derecha"
                     width={14}
                     height={14}
                     className=" object-contain"
                  />
               </button>
            </div>
         </div>
      </>
   );
};

export default CarrouselProductosPerros;
