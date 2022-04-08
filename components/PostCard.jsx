import React from 'react';
import Link from 'next/link';

const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL

const PostCard = ({ post }) => {
   return (
      <>
         <div className="bg-gray-200 rounded-lg overflow-hidden mb-10 shadow-lg shadow-black">
            <img
               src={`${assetsUrl}/${post.featured_image.id}`}
               alt="image"
               className="w-full"
            />
            <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
               <h3>
                  <a
                     className="
                           font-semibold
                           text-dark text-xl
                           sm:text-[22px]
                           md:text-xl
                           lg:text-[22px]
                           xl:text-xl
                           2xl:text-[22px]
                           mb-4
                           block
                           hover:text-primary
                           "
                  >
                     {post.title}
                  </a>
               </h3>
               <p className="text-base text-body-color leading-relaxed mb-7">
                  {post.description}
               </p>
               <Link href={`posts/${post.slug}`}>
                  <a
                     className="
                           inline-block
                           py-2
                           px-7
                           border border-[#E5E7EB]
                           rounded-full
                           text-base text-body-color
                           font-medium
                           hover:border-primary hover:bg-primary hover:text-white
                           transition
                           "
                  >
                     View Details
                  </a>
               </Link>
            </div>
         </div>
      </>
   )
}

export default PostCard;