import Image from 'next/image';

const ContenidoMosaico = () => {
   return (
      <>
         <div className="flex flex-col gap-4 w-full">
            <div className="relative w-100 aspect-[4/5]">
               <Image
                  src="/mosaico/imagen1.png"
                  alt="Mosaico"
                  fill
                  className="object-cover rounded-2xl"
               />
            </div>
            <div className="relative w-100 aspect-[5/4]">
               <Image
                  src="/mosaico/imagen2.png"
                  alt="Mosaico"
                  fill
                  className="object-cover rounded-2xl"
               />
            </div>
         </div>
         <div className="flex flex-col-reverse gap-4">
            <div className="relative w-100 aspect-[4/5]">
               <Image
                  src="/mosaico/imagen3.png"
                  alt="Mosaico"
                  fill
                  className="object-cover rounded-2xl"
               />
            </div>
            <div className="relative w-100 aspect-[5/4]">
               <Image
                  src="/mosaico/imagen4.png"
                  alt="Mosaico"
                  fill
                  className="object-cover rounded-2xl"
               />
            </div>
         </div>
         <div className="flex flex-col gap-4">
            <div className="relative w-100 aspect-[4/5]">
               <Image
                  src="/mosaico/imagen5.png"
                  alt="Mosaico"
                  fill
                  className="object-cover rounded-2xl"
               />
            </div>
            <div className="relative w-100 aspect-[5/4]">
               <Image
                  src="/mosaico/imagen6.png"
                  alt="Mosaico"
                  fill
                  className="object-cover rounded-2xl"
               />
            </div>
         </div>
         <div className="flex flex-col-reverse gap-4">
            <div className="relative w-100 aspect-[4/5]">
               <Image
                  src="/mosaico/imagen7.png"
                  alt="Mosaico"
                  fill
                  className="object-cover rounded-2xl"
               />
            </div>
            <div className="relative w-100 aspect-[5/4]">
               <Image
                  src="/mosaico/imagen8.png"
                  alt="Mosaico"
                  fill
                  className="object-cover rounded-2xl"
               />
            </div>
         </div>
         <div className="flex flex-col gap-4">
            <div className="relative w-100 aspect-[4/5]">
               <Image
                  src="/mosaico/imagen9.png"
                  alt="Mosaico"
                  fill
                  className="object-cover rounded-2xl"
               />
            </div>
            <div className="relative w-100 aspect-[5/4]">
               <Image
                  src="/mosaico/imagen10.png"
                  alt="Mosaico"
                  fill
                  className="object-cover rounded-2xl"
               />
            </div>
         </div>
      </>
   );
};

export default ContenidoMosaico;
