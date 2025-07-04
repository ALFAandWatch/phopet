import Image from 'next/image';

const AlbumCard = () => {
   return (
      <>
         <div className="bg-white w-55 aspect-[3/2] rounded-md flex justify-start p-2 shrink-0">
            <div className="h-full">
               <Image
                  src="/suenos.png"
                  alt="Portada"
                  width={74}
                  height={50}
                  className="object-contain"
               />
            </div>
            <div className="px-2">
               <h2 className="text-orange-400 text-xs font-bold">ALBUM</h2>
               <h2 className="text-orange-400 text-md font-bold">Sueños</h2>
            </div>
         </div>
      </>
   );
};

export default AlbumCard;
