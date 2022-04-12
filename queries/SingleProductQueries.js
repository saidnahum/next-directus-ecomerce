export const SinglepageProductBySlugQuery = `
   query SinglepageProductBySlugQuery ($product_slug: String) {
      products(filter: {slug: {_eq: $product_slug}}) {
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
`;