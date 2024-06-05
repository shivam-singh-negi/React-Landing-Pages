import { Button,  } from 'flowbite-react';
import React from 'react';
import heroImage from './hero_home_image_consulting.jpg'; // Importing the image
import dot_pattern from "./dot_pattern3.png";
const Hero = () => {
    return (
<div class="border-blue-900  mt-[50px] space-y-5">
<section class=" flex flex-row justify-evenly ">
    <div class=" flex flex-col pt-10">
        <h1 class="text-[50px] text-white font-bold">Masterminds to <br/> Your Positive Goal</h1>
        <p class="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sunt iure,
         exercitationem laborum eum eius atque de excepturi. 
         Aspernatur repudiandae deserunt itaque necessitatibus? Dolor perspiciatis tempora veritatis autem.
       </p>  
       <div class=" my-10 flex flex-row justify-start gap-10 text-start ">
       <button type="button" class="text-white  bg-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Collaborate With Us</button>
        <button type="button" class=" border-[1px]  border-orange-500 text-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button>
       </div>
       <div class="h-[1px] bg-orange-500 w-[70%]"/>
       </div> 
       <div class="relative inline-block">
        <img class="absolute top-[30px] left-[-100px] w-[200px]   z-10" src={dot_pattern} alt="dot_pattern_image" />
        <img class="rounded-3xl w-full h-full grayscale-[100%] z-20" src={heroImage} alt="hero_home_consulting_image" />
        <div class="rounded-3xl absolute border-[1px] border-orange-500 w-full h-full top-[30px] left-[20px] z-30"></div>

</div>

</section>

<section class="my-[15px] flex flex-row   text-white items-center">
<div class="space-y-2 flex-wrap flex-col ">
    <h1 class='text-[20px] font-bold'>This is Our Result</h1>
    <p class="text-gray-300">How capable we are at work shines through in every endevor.</p>
</div>
<div class="flex  w-[100%]  ">
    <ul class="flex flex-row justify-evenly w-[100%] ">
        <li>
            <div class="flex flex-wrap flex-col text-justify ">
            <h1 class="text-[50px] font-semibold">160</h1>
            <p class="text-gray-300 text-[15px] ">Client Project</p>
            </div>
        </li>
        <li>
            <div class="flex flex-wrap flex-col text-justify">
            <h1 class="text-[50px] font-semibold">340</h1>
            <p class="text-gray-300 text-[15px]">Sucesful Project</p>
            </div>
        </li>
        <li>
            <div class="flex flex-wrap flex-col text-justify">
            <h1 class="text-[50px] font-semibold">300+</h1>
            <p class="text-gray-300 text-[15px]">Team Members</p>
            </div>
        </li>
        <li>
            <div class="flex flex-wrap flex-col text-justify">
            <h1 class="text-[50px] font-semibold">82M</h1>
            <p class="text-gray-300 text-[15px]">Total Revenue</p>
            </div>
        </li>
    </ul>
</div>
</section>
</div>
    );
}

export default Hero;
