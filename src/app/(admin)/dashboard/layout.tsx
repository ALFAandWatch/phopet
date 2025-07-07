import '../../globals.css';
import { Open_Sans, Bowlby_One_SC } from 'next/font/google';

const openSans = Open_Sans({
   variable: '--font-open-sans',
   subsets: ['latin'],
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
            className={`${openSans.variable} ${bowlbyOneSC.variable} antialiased`}
         >
            <div className="flex">
               <aside className="w-64 bg-gray-800 text-white p-4">
                  {/* Sidebar de admin */}
                  <p className="text-xl font-bold mb-4">Panel Admin</p>
                  <ul>
                     <li className="text-red-400">Productos</li>
                     <li className="text-black">Categorías</li>
                     {/* Más enlaces... */}
                  </ul>
               </aside>
               <main className="flex-1 p-6 bg-gray-100">{children}</main>
            </div>
         </body>
      </html>
   );
}
