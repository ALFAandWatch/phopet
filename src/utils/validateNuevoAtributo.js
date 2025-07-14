export const validateNuevoAtributo = (values) => {
   const errors = {};

   if (!values.nombre.trim()) {
      errors.nombre = 'El nombre del atributo es obligatorio.';
   }

   if (!values.slugUrl.trim()) {
      errors.slugUrl = 'El slug URL es obligatorio.';
   } else if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(values.slugUrl)) {
      errors.slugUrl =
         'El slug debe contener solo letras minúsculas, números y guiones.';
   }

   return errors;
};
