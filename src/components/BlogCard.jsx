import React from 'react';
import marketing_image from "./assets/marketing_blog_image.jpg"
const BlogCard = () => {
    return (
        <div>
            

<div class=" relative max-w-lg  max-h-[450px] bg-white rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden ">
<span
      id="badge-dismiss-default"
      class="absolute left-[30px] top-[30px] inline-flex items-center px-4 py-2 me-2 text-lg font-medium text-white bg-red-700 bg-opacity-60   backdrop-filter rounded-lg dark:bg-blue-900 dark:bg-opacity-20 dark:text-blue-300"
    >
      Marketing
    </span>

    <a href="#">
        <img class="rounded-t-lg max-h-[250px] w-full" src={marketing_image} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Latest Insights into Modern Marketing</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-clip">Disover the dynamic real of modern marketing through our latest insighs. In an era marked by technological evoluton.</p>
        <div class="flex flex-row items-center justify-between">
  <p class="text-lg text-gray-600">December 18th, 2023</p>
  <button type="button" class="text-red-700 hover:text-green-700  focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">
    Read More
  </button>
</div>

       
    </div>
</div>

        </div>
    );
}

export default BlogCard;
