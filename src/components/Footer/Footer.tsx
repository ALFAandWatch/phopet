import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
   return (
      <footer className="w-screen">
         <div className="bg-orange-500 flex justify-center items-center py-12">
            <Image src="/logo_white.png" alt="Logo" width={380} height={130} />
         </div>
         <div className="bg-violet-700 flex flex-col gap-8 py-5">
            <div className="flex justify-center gap-9">
               <Link
                  href=""
                  className="text-white font-(family-name:--font-open-sans) font-semibold"
               >
                  Nosotros
               </Link>
               <Link
                  href=""
                  className="text-white font-(family-name:--font-open-sans) font-semibold"
               >
                  Envíos
               </Link>
               <Link
                  href=""
                  className="text-white font-(family-name:--font-open-sans) font-semibold"
               >
                  Crear Álbum de Fotos
               </Link>
               <Link
                  href=""
                  className="text-white font-(family-name:--font-open-sans) font-semibold"
               >
                  Tienda
               </Link>
               <Link
                  href=""
                  className="text-white font-(family-name:--font-open-sans) font-semibold"
               >
                  Ayuda
               </Link>
            </div>
            <div className="flex justify-center gap-5">
               <Link
                  href=""
                  className="text-white font-(family-name:--font-open-sans) font-semibold"
               >
                  Terminos y Condiciones
               </Link>
               <Link
                  href=""
                  className="text-white font-(family-name:--font-open-sans) font-semibold"
               >
                  Politicas de Privacidad
               </Link>
            </div>
            <div className="flex justify-center items-center gap-5">
               <p className="text-white font-(family-name:--font-open-sans) font-semibold">
                  Copyright © 2025 PHOPET.UY
               </p>
               <div className="flex flex-nowrap gap-3">
                  <div className="shrink-0 w-10 aspect-square bg-orange-500 rounded-full flex items-center justify-center">
                     <Image
                        src="/icons/whatsapp.png"
                        alt="WhatsApp"
                        width={40}
                        height={40}
                        className=" p-2 rounded-full object-contain"
                     />
                  </div>
                  <div className="shrink-0 w-10 aspect-square bg-orange-500 rounded-full flex items-center justify-center">
                     <Image
                        src="/icons/facebook.png"
                        alt="Facebook"
                        width={27}
                        height={20}
                        className="p-2 rounded-full object-contain"
                     />
                  </div>
                  <div className="shrink-0 w-10 aspect-square bg-orange-500 rounded-full flex items-center justify-center">
                     <Image
                        src="/icons/instagram.png"
                        alt="Instagram"
                        width={40}
                        height={20}
                        className="p-2 rounded-full object-contain"
                     />
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
