import { Button,  } from 'flowbite-react';
import React from 'react';
import heroImage from './assets/hero_home_image_consulting.jpg'; // Importing the image
import dot_pattern from "./assets/dot_pattern3.png";
import growth_image from "./assets/growth.png"
import innovation from "./assets/innovation.png"
import stripe_pattern from "./assets/stripe_pattern.png"
import vertical_dot from "./assets/vertical_dots.png"
import meeting1 from "./assets/meeting.jpg"
import meeting2 from "./assets/meeting2.png"
const Benefits = () => {
    return (
<div class=" my-[50px] space-y-5">
<section class=" flex flex-row justify-between m-auto ">
    <div class="flex flex-col pt-10 w-1/2 space-y-5 pr-5 gap-5 justify-center" >
        <h1 class="text-4xl text-white font-bold">Benefits of Teaming Up with Us</h1>
        <p class="text-gray-400 text-wrap text-[20px]">Embark on a transformative jurney with us, where tailored solutions and dedicated support
        redefine collaborative success.
       </p>  
        <div class="my-10 flex flex-col gap-5 ">
        <div class="  flex flex-row justify-start gap-5 text-start bg-white rounded-r-xl  ">
       <img src={growth_image} alt="growth image" class="w-[100px]"  />
        <div class="space-y-2 my-3">
            <h1 class="text-xl text-black font-bold">Progressive Oriented</h1>
            <p>Introducing progress with dynamic strategies and forward- thinking solutions.</p>
        </div>
       </div>
       <div class="  flex flex-row justify-start gap-5 text-start bg-white rounded-r-xl  ">
<img src={innovation} alt="innovation image" class="w-[100px]"  />
        <div class="space-y-2 my-3">
            <h1 class="text-xl text-black font-bold">Innovative Vision</h1>
            <p>Crafting Solutions through forward-thinking strategies and innovative vision.</p>
        </div>
       </div>
        </div>
       

       </div> 


       <div class="relative inline-block w-1/2  flex flex-col gap-5 justify-center ">
       
        <div class="flex flex-row justify-between  h-[35%]">
        <img class="  w-[75%] h-auto grayscale-[100%]" src={meeting1} alt="meeting1" />

        <img class=" right-[0px] w-[20%]" src={stripe_pattern} alt="stripe_pattern" />
       
        </div>
        <div class="flex flex-row justify-between  h-[45%]"> 
        <img class=" bottom-[20px] left-[-20px] w-[20%]   " src={vertical_dot} alt="vertical_dot" />

<img class="   right-[10px] w-[75%] h-auto grayscale-[100%]" src={meeting2} alt="meeting2" />
</div>
       
       
        <div class="rounded-3xl absolute border-[1px] border-orange-500 w-full h-[85%] top-[75px] left-[30px] z-30"></div>

</div>

</section>

</div>
    );
}

export default Benefits;
