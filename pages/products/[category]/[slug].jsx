import Head from 'next/head';
import Image from 'next/image';
import getData from '../../../queries/getData';
import { SinglepageProductBySlugQuery } from '../../../queries/SingleProductQueries';

const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;

const ProductPage = ({ product }) => {

   return (
      <section className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
         <Head>
            <title>{product.name}</title>
         </Head>

         <div className='md:flex'>
            <div className=''>
               <img 
                  src={`${assetsUrl}/${product.image.id}`} 
                  alt='product image' 
               />
            </div>

            <div className="mt-2 md:ml-4">
               <h2 className='text-2xl font-extrabold tracking-tight text-gray-900'>{product.name}</h2>
            </div>
         </div>
      </section>
   )
}

export default ProductPage;

export const getServerSideProps = async (ctx) => {
   const {slug} = ctx.query

   const data = await getData(SinglepageProductBySlugQuery, 'products', {product_slug: slug})

   return {
      props: {
         product: data[0]
      }
   }
}