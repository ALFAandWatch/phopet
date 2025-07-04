import ContenidoMosaico from '../ContenidoMosaico/ContenidoMosaico';

const Mosaico = () => {
   return (
      <>
         <div className="overflow-x-hidden w-full">
            <div id="sliderMosaico" className="w-full flex gap-4">
               <ContenidoMosaico />
               <ContenidoMosaico />
            </div>
         </div>
      </>
   );
};

export default Mosaico;
