import fetchData from "../helpers/fetchData";

export const getHomepageProducts = async () => {

   const data = await fetchData(
      `
         query HomepageProducts {
            products {
               id
               name
               price
               image {
                  id
               }
               product_categories {
                  categories_id {
                     id
                     name
                  }
               }
            }
         }
      `, 
      { 
         variables: {} 
      }
   )

   return data.data.products;
};