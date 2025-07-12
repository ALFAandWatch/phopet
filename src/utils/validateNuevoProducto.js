const validateNuevoProducto = (values) => {
   const errors = {};

   // Nombre
   if (!values.nombre?.trim()) {
      errors.nombre = 'El nombre del producto es obligatorio.';
   }

   // Slug URL
   if (!values.slugUrl?.trim()) {
      errors.slugUrl = 'El slug es obligatorio.';
   } else if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(values.slugUrl)) {
      errors.slugUrl =
         'El slug solo puede contener letras minúsculas, números y guiones.';
   }

   // Descripción corta
   if (!values.descripcionCorta?.trim()) {
      errors.descripcionCorta = 'La descripción corta es obligatoria.';
   }

   // Descripción larga
   if (!values.descripcionLarga?.trim()) {
      errors.descripcionLarga = 'La descripción larga es obligatoria.';
   }

   // Meta Title
   if (!values.metaTitle?.trim()) {
      errors.metaTitle = 'El meta title es obligatorio.';
   } else if (values.metaTitle.length > 50) {
      errors.metaTitle = 'El meta title no debe superar los 50 caracteres.';
   }

   // Meta Description
   if (!values.metaDescription?.trim()) {
      errors.metaDescription = 'La meta description es obligatoria.';
   } else if (values.metaDescription.length > 150) {
      errors.metaDescription =
         'La meta description no debe superar los 150 caracteres.';
   }

   return errors;
};

export default validateNuevoProducto;
