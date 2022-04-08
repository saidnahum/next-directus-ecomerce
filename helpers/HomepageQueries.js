import { gql } from '@apollo/client';

export const HomePageProducts = gql`
   query {
      products{
         id
         product_name
         price
         product_image {
            id
         }
         product_categories {
            categories_id {
               id
               category_name
            }
         }
      }
   }
`;