import Image from 'next/image';

type Producto = {
   nombre: string;
   imagenUrl: string;
   precioReal: number;
   descuento?: number;
};

type ProductoCardProps = {
   producto: Producto;
   index: number;
};

const ProductoCard = ({ producto, index }: ProductoCardProps) => {
   const { nombre, imagenUrl, precioReal, descuento } = producto;

   return (
      <>
         <div className="bg-white p-3 rounded-md flex flex-col gap-4">
            <div className="relative w-40 h-40 shrink-0">
               <Image
                  src={imagenUrl}
                  alt="Producto"
                  fill
                  className="object-contain"
               />
            </div>
            <p className="text-white text-xs bg-orange-500 w-fit rounded-md p-1 font-semibold">
               {index + 1}° MAS VENDIDO
            </p>
            <p className="text-gray-400 text-[.7rem] ">{nombre}</p>
            {descuento ? (
               <div className="">
                  <p className="text-gray-400 text-sm line-through">
                     ${precioReal}
                  </p>
                  <p className="text-black text-xl inline">
                     $
                     {Math.floor(
                        precioReal * (1 - (descuento ?? 0) / 100)
                     ).toLocaleString()}
                  </p>
                  <p className="text-green-600 inline text-sm ms-2">
                     {descuento}% OFF
                  </p>
               </div>
            ) : (
               <p className="text-black text-xl">${precioReal}</p>
            )}
            <button className="bg-orange-500 text-white text-xs p-2 font-(family-name:--font-open-sans) mt-auto rounded-full hover:cursor-pointer hover:brightness-120">
               <Image
                  src="/icons/carrito2.png"
                  alt="Agregar al carrito"
                  width={20}
                  height={20}
                  className="inline pe-1"
               />
               AGREGAR AL CARRITO
            </button>
         </div>
      </>
   );
};

export default ProductoCard;
