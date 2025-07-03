import Mosaico from '@/components/Mosaico/Mosaico';
import Image from 'next/image';
import categoriasGatos from '@/helpers/categorias-gatos';
import categoriasPerros from '@/helpers/categorias-perros';
import Link from 'next/link';
import CarrouselProductosPerros from '@/components/CarrouselProductosPerros/CarrouselProductosPerros';
import CarrouselProductosGatos from '@/components/CarrouselProductosGatos/CarrouselProductosGatos';
import AlbumCard from '@/components/AlbumCard/AlbumCard';

export default function Home() {
   return (
      <div className="bg-gray-200 flex flex-col items-center w-screen">
         <div className="flex flex-col items-center w-[40%] mx-auto gap-7 py-12">
            <Image src="/logo.png" alt="Phopet" width={500} height={100} />
            <h2 className="text-orange-500 px-20 text-center font-semibold font-(family-name:--font-open-sans)">
               ¡Haz de tu mascota la estrella! Convierte fácilmente cada foto en
               una obra de arte y crea recuerdos inolvidables de tu amigo
               peludo.
            </h2>
         </div>
         {/* =================== MOSAICO ============================= */}
         <div className="w-screen">
            <div className="w-[95%] overflow-hidden mx-auto flex flex-col items-center gap-12">
               <Mosaico />
               <div className="bg-orange-400/65 flex items-center justify-between gap-5 text-white mb-10 w-90 p-2 py-4 rounded-full">
                  <p className="font-(family-name:--font-open-sans) font-bold text-sm ps-4">
                     OBTEN 15 FOTOS
                     <br />
                     DE TU MASCOTA
                  </p>
                  <p className="font-(family-name:--font-open-sans) font-bold text-2xl">
                     $600
                  </p>
                  <button className="bg-orange-500 p-3 rounded-full hover:cursor-pointer hover:brightness-120">
                     LO QUIERO
                  </button>
               </div>
            </div>
         </div>
         {/* =================== TIENDA ============================= */}
         <div className="w-screen mt-20">
            <div className="flex flex-col items-center gap-5">
               <h2 className="font-(family-name:--font-bowlby-one) text-orange-500 text-[8rem]">
                  TIENDA
               </h2>
               <h3 className="text-black text-xl mt-5">Categorias Perros</h3>
               <div className="flex justify-center gap-8">
                  {categoriasPerros.map((categoria, index) => (
                     <Link href="" key={index} className="hover:cursor-pointer">
                        <div className="">
                           <Image
                              src={categoria.imageUrl}
                              alt={categoria.nombre}
                              width={100}
                              height={100}
                           />
                           <p className="text-black text-center">
                              {categoria.nombre}
                           </p>
                        </div>
                     </Link>
                  ))}
               </div>
               <h3 className="text-black text-xl mt-5">Categorias Gatos</h3>
               <div className="flex justify-center gap-8">
                  {categoriasGatos.map((categoria, index) => (
                     <Link href="" key={index} className="hover:cursor-pointer">
                        <div className="">
                           <Image
                              src={categoria.imageUrl}
                              alt={categoria.nombre}
                              width={100}
                              height={100}
                           />
                           <p className="text-black text-center">
                              {categoria.nombre}
                           </p>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>
         </div>
         {/* =================== CARROUSELES DE PRODUCTOS ============================= */}
         <div className="w-screen">
            <div className="w-258 mx-auto p-2">
               <CarrouselProductosPerros />
               <CarrouselProductosGatos />
            </div>
         </div>
         {/* =================== PUBLICIDAD ============================= */}
         <div className="w-screen">
            <div className="w-[71%] h-78 relative mx-auto p-2 mt-20">
               <Image
                  src="/promo-hills.png"
                  alt="Promo"
                  fill
                  className="object-contain"
               />
            </div>
         </div>
         {/* =================== FOTOS COMO FUNCIONA ============================= */}
         <div className="w-screen">
            <div className="flex flex-col items-center mt-20">
               <h2 className="font-(family-name:--font-bowlby-one) text-orange-500 text-[6rem]">
                  FOTOS
               </h2>
               <h2 className="font-(family-name:--font-bowlby-one) text-orange-500 text-[6rem]">
                  COMO FUNCIONA
               </h2>
               <div className="w-[75%] mx-auto flex justify-center gap-15">
                  <div className="flex flex-col items-center basis-1/3">
                     <Image
                        src="/fotos1.png"
                        alt="Como Funciona"
                        width={356}
                        height={403}
                     />
                     <div className="bg-orange-500 text-white rounded-full p-2 w-15 aspect-square  font-semibold text-2xl flex justify-center items-center">
                        1
                     </div>
                     <h2 className="font-(family-name:--font-open-sans) text-orange-500 font-bold text-xl mt-7 mb-10">
                        Sube las fotos de tu mascota
                     </h2>
                     <p className="font-(family-name:--font-open-sans) text-orange-500 text-md font-semibold text-center">
                        Entrena tu modelo de ia subiendo algunas fotos recientes
                        de tu mascota. Entre 10 y 20 fotos
                     </p>
                  </div>
                  <div className="flex flex-col items-center basis-1/3">
                     <Image
                        src="/fotos2.png"
                        alt="Como Funciona"
                        width={356}
                        height={403}
                     />
                     <div className="bg-orange-500 text-white rounded-full p-2 w-15 aspect-square  font-semibold text-2xl flex justify-center items-center">
                        2
                     </div>
                     <h2 className="font-(family-name:--font-open-sans) text-orange-500 font-bold text-xl mt-7 mb-10">
                        Elige un Álbum
                     </h2>
                     <p className="font-(family-name:--font-open-sans) text-orange-500 text-md font-semibold text-center">
                        Selecciona un álbum de nuestra extensa lista para crear
                        imágenes impresionantes.
                     </p>
                  </div>
                  <div className="flex flex-col items-center basis-1/3">
                     <Image
                        src="/fotos3.png"
                        alt="Como Funciona"
                        width={356}
                        height={403}
                     />
                     <div className="bg-orange-500 text-white rounded-full p-2 w-15 aspect-square  font-semibold text-2xl flex justify-center items-center">
                        3
                     </div>
                     <h2 className="font-(family-name:--font-open-sans) text-orange-500 font-bold text-xl mt-7 mb-10">
                        Descargar y Usar
                     </h2>
                     <p className="font-(family-name:--font-open-sans) text-orange-500 text-md font-semibold text-center">
                        Obtén tu paquete de fotos personalizadas y comienza a
                        usarlas en tu teléfono, carteles o donde quieras.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         {/* =================== TEMAS ============================= */}
         <div className="w-screen flex flex-col">
            <h2 className="font-(family-name:--font-bowlby-one) text-orange-500 text-[6rem] text-center">
               TEMAS
            </h2>
            <div className="flex flex-col">
               <div className="flex">
                  <AlbumCard />
               </div>
            </div>
         </div>
      </div>
   );
}
