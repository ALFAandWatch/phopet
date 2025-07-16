import axiosInstance from './axiosInstance';

const fetchAtributos = async () => {
   try {
      const response = await axiosInstance.get('atributos/listarAtributos');
      return response.data.data;
   } catch (error) {
      console.log(error);
      return [];
   }
};

export default fetchAtributos;
