import Image from 'next/image';
import '../../globals.css';
import { Open_Sans, Bowlby_One_SC, Poppins } from 'next/font/google';
import Link from 'next/link';

const openSans = Open_Sans({
   variable: '--font-open-sans',
   subsets: ['latin'],
});

const poppins = Poppins({
   variable: '--font-poppins',
   subsets: ['latin'],
   weight: '400',
});

const bowlbyOneSC = Bowlby_One_SC({
   variable: '--font-bowlby-one',
   subsets: ['latin'],
   weight: '400',
});

export default function AdminLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body
            className={`${openSans.variable} ${bowlbyOneSC.variable} ${poppins.variable} antialiased`}
         >
            <div className="flex">
               <aside className="w-90 2xl:w-140 bg-orange-100 text-orange-400 font-(family-name:--font-open-sans) text-md 2xl:text-3xl p-4 text h-screen flex justify-end">
                  <div className="w-50 2xl:w-70 flex flex-col justify-between mt-7 2xl:mt-10 mb-12 2xl:mb-20 2xl:me-15">
                     <div className="w-full h-15 2xl:h-25 relative">
                        <Image
                           src="/icons/logo.svg"
                           alt="Logo"
                           fill
                           sizes="(max-width: 768px) 100vw, 50vw"
                           className="object-contain pe-8"
                        />
                     </div>
                     <div>
                        <h2 className="2xl:p-1">IMAGENES</h2>
                        <ul className="font-semibold">
                           <li className="text-red-400 2xl:p-1">
                              <Link href="">Biblioteca</Link>
                           </li>
                        </ul>
                     </div>
                     <div>
                        <h2 className="2xl:p-1">PRODUCTOS</h2>
                        <ul className="font-semibold">
                           <li className="text-red-400 2xl:p-1">
                              <Link href="/dashboard/productos">Productos</Link>
                           </li>
                           <li className="text-red-400 2xl:p-1">
                              <Link href="/dashboard/categorias">
                                 Categorias
                              </Link>
                           </li>
                           <li className="text-red-400 2xl:p-1">
                              <Link href="">Atributos</Link>
                           </li>
                           <li className="text-red-400 2xl:p-1">
                              <Link href="">Testimonios</Link>
                           </li>
                        </ul>
                     </div>
                     <div>
                        <h2 className="2xl:p-1">PEDIDOS</h2>
                        <ul className="font-semibold">
                           <li className="text-red-400 2xl:p-1">
                              <Link href="">Compras</Link>
                           </li>
                        </ul>
                     </div>
                     <div>
                        <h2 className="2xl:p-1">SLIDER</h2>
                        <ul className="font-semibold">
                           <li className="text-red-400 2xl:p-1">
                              <Link href="">Banners</Link>
                           </li>
                        </ul>
                     </div>
                     <div>
                        <h2 className="2xl:p-1">FOTOS</h2>
                        <ul className="font-semibold">
                           <li className="text-red-400 2xl:p-1">
                              <Link href="">Álbumes</Link>
                              <Link href="">Sorteos</Link>
                           </li>
                        </ul>
                     </div>
                     <div>
                        <h2 className="2xl:p-1">ÁLBUMES</h2>
                        <ul className="font-semibold">
                           <li className="text-red-400 2xl:p-1">
                              <Link href="">Crear Álbum</Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </aside>
               <main className="flex-1 p-12 2xl:p-18 bg-gray-100">
                  {children}
               </main>
            </div>
         </body>
      </html>
   );
}
