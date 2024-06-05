import { Button,  } from 'flowbite-react';
import React from 'react';
import heroImage from './assets/hero_home_image_consulting.jpg'; // Importing the image
import dot_pattern from "./assets/dot_pattern3.png";
import growth_image from "./assets/growth.png"
import innovation from "./assets/innovation.png"
const Benefits = () => {
    return (
<div class="border-blue-900  mt-[50px] space-y-5">
<section class=" flex flex-row justify-around m-auto ">
    <div class=" flex flex-col pt-10 w-1/2 space-y-5 pr-5">
        <h1 class="text-3xl text-white font-bold">Benefits of Teaming Up with Us</h1>
        <p class="text-gray-400 text-wrap">Embark on a transformative jurney with us, where tailored solutions and dedicated support
        redefine collaborative success.
       </p>  
        
       <div class=" my-10 flex flex-row justify-start gap-10 text-start bg-white rounded-r-xl  ">
       <img src={growth_image} alt="growth image" class="w-[100px]"  />
        <div class="space-y-2 my-3">
            <h1 class="text-xl text-black font-bold">Progressive Oriented</h1>
            <p>Introducing progress with dynamic strategies and forward- thinking solutions.</p>
        </div>
       </div>
       <div class=" my-10 flex flex-row justify-start gap-10 text-start bg-white rounded-r-xl  ">
<img src={innovation} alt="innovation image" class="w-[100px]"  />
        <div class="space-y-2 my-3">
            <h1 class="text-xl text-black font-bold">Innovative Vision</h1>
            <p>Crafting Solutions through forward-thinking strategies and innovative vision.</p>
        </div>
       </div>

       </div> 
       <div class="relative inline-block w-1/2">
        <img class="absolute top-[20px] left-[-100px] w-[200px]   z-10" src={dot_pattern} alt="dot_pattern_image" />
        <img class="rounded-3xl w-full h-full grayscale-[100%] z-20" src={heroImage} alt="hero_home_consulting_image" />
        <div class="rounded-3xl absolute border-[1px] border-orange-500 w-full h-full top-[30px] left-[20px] z-30"></div>

</div>

</section>

</div>
    );
}

export default Benefits;
