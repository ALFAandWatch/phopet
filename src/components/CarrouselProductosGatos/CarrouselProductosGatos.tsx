import productosGatos from '@/helpers/productos-gatos';
import ProductoCard from '../ProductoCard/ProductoCard';

const CarrouselProductosGatos = () => {
   return (
      <>
         <div className="w-full flex flex-col mt-10 gap-3">
            <h2 className="text-black text-lg">Alimentos para Gatos</h2>
            <div className="w-full flex flex-start flex-nowrap gap-5 overflow-hidden">
               {productosGatos.map((producto, index) => (
                  <ProductoCard key={index} index={index} producto={producto} />
               ))}
            </div>
         </div>
      </>
   );
};

export default CarrouselProductosGatos;
