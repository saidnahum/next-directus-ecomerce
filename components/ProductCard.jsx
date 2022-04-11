import React from 'react';
import Link from 'next/link';

const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL

const ProductCard = ({ product }) => {

   const { name, image, price, id, product_categories } = product;

   return (
      <a href="#" className="group">
         <div>
            <img className="w-full object-center object-cover group-hover:opacity-75" src={`${assetsUrl}/${image.id}?width=385&height=385`} alt="Sunset in the mountains" />
         </div>
         <div className="px-6 py-4">
            <h3 className="text-sm text-gray-700 mt-0">
               {name}
               <span className="text-xs text-gray-500 mb-0 rounded-3xl bg-gray-200 px-2 py-1 inline-block ml-2">
                  {product_categories[0].categories_id.name}
               </span>
            </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
               ${price}
            </p>
         </div>
      </a>
   )
}

export default ProductCard;