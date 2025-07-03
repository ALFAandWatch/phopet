import Image from 'next/image';
import SearchBar from '../SearchBar/SearchBar';
import Link from 'next/link';

const Navbar = () => {
   return (
      <>
         <div className="w-screen bg-orange-500 flex items-center justify-between p-3 px-5">
            <Image
               src="/logo_white.png"
               alt="Phopet"
               width={150}
               height={22}
               className="p-1"
            />
            <div className="ml-25">
               <SearchBar />
            </div>
            <div className="flex items-center justify-end gap-3">
               <div className="border-2 border-violet-700 rounded-full p-2">
                  GP
               </div>
               <Link href="" className="text-sm">
                  Mis Compras
               </Link>
               <Link href="" className="text-sm">
                  Favoritos
               </Link>
               <Link href="">
                  <Image
                     src="/icons/carrito.png"
                     alt="Productos"
                     width={40}
                     height={40}
                     className="p-2"
                  />
               </Link>
            </div>
         </div>
         <div className="w-screen bg-violet-700 flex justify-center items-center gap-4 relative font-(family-name:--font-open-sans) py-3">
            <Link href="" className="text-white text-sm font-semibold">
               Inicio
            </Link>
            <Link href="" className="text-white text-sm font-semibold">
               Crear Álbum de Fotos
            </Link>
            <Link href="" className="text-white text-sm font-semibold">
               Tienda
            </Link>
            <Link href="" className="text-white text-sm font-semibold">
               Ofertas
            </Link>
         </div>
      </>
   );
};

export default Navbar;
