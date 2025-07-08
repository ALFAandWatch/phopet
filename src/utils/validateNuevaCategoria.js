export default function validateNuevaCategoria(values) {
   const errors = {};

   if (!values.nombre || values.nombre.trim() === '') {
      errors.nombre = 'El nombre de la categoría es obligatorio';
   }

   if (!values.slugUrl || values.slugUrl.trim() === '') {
      errors.slugUrl = 'El slug URL es obligatorio';
   }

   return errors;
}
