import Image from 'next/image';

const AlbumCard = () => {
   return (
      <>
         <div className="bg-white rounded-md flex">
            <div className="relative h-[100%] w-40">
               <Image
                  src="/suenos.png"
                  alt="Portada"
                  fill
                  className="object-contain"
               />
            </div>
            <div>
               <h2 className="text-orange-400">ALBUM</h2>
               <h2 className="text-orange-400">Sueños</h2>
            </div>
         </div>
      </>
   );
};

export default AlbumCard;
