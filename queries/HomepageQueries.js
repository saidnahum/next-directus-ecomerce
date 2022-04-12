export const HomepageProductsQuery = `
   query HomepageProducts {
      products {
         id
         name
         price
         slug
         image {
            id
         }
         product_categories {
            categories_id {
               id
               name
               slug
            }
         }
      }
   }
`;

export const HomepageCategoriesQuery = `
   query HomepageCategories {
      categories {
         id
         name
         slug
      }
   }
`;

export const HomepageFilteredProductsQuery = `
   query HomepageFilteredProdcts ($categories: [Float]) {
      products( filter: { product_categories: { categories_id: { id: { _in: $categories } } } } ) {
         id
         name
         price
         slug
         image {
            id
         }
         product_categories {
            categories_id {
               id
               name
               slug
            }
         }
      }
   }
`;