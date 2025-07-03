import ContenidoMosaico from '../ContenidoMosaico/ContenidoMosaico';

const Mosaico = () => {
   return (
      <>
         <div
            id="sliderMosaico"
            className="w-full flex gap-4 overflow-x-hidden"
         >
            <ContenidoMosaico />
            <ContenidoMosaico />
         </div>
      </>
   );
};

export default Mosaico;
