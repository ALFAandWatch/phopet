import Image from 'next/image';

const SearchBar = () => {
   return (
      <>
         <div className="bg-white flex justify-between h-10">
            <div className="flex border-2 border-white focus-within:border-2 focus-within:border-violet-700">
               <Image
                  src="/icons/search.png"
                  alt="Buscar"
                  width={35}
                  height={50}
                  className="p-2"
               />
               <input
                  type="text"
                  placeholder="Buscar Productos y Marcas"
                  className="w-90 outline-none placeholder-gray-400 text-black"
               />
            </div>
            <button className="bg-violet-700 font-(family-name:--font-open-sans) p-2 px-5 text-sm font-bold hover:cursor-pointer hover:brightness-120">
               Buscar
            </button>
         </div>
      </>
   );
};

export default SearchBar;
