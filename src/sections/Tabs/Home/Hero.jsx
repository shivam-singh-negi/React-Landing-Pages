import { Button,  } from 'flowbite-react';
import React from 'react';
import heroImage from './hero_home_image_consulting.jpg'; // Importing the image

const Hero = () => {
    return (

<section class="border-blue-900  border-[1px]">
<section class="flex flex-row justify-evenly ">
    <div class=" ">
        <h1 class="text-4xl text-white">Masterminds to <br/> Your Positive Goal</h1>
        <p class="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sunt iure,
         exercitationem laborum eum eius atque de excepturi. 
         Aspernatur repudiandae deserunt itaque necessitatibus? Dolor perspiciatis tempora veritatis autem.
       </p>  
       <div class="flex flex-row justify-start gap-10 text-start">
       <button type="button" class="text-white  bg-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Collaborate With Us</button>
        <button type="button" class=" border-[1px]  border-orange-500 text-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button>

       </div>
       </div>

       <div class="">
    <img src={heroImage} alt="hero_home_consulting_image" class="src" />
</div>

</section>

<section class="flex flex-row justify-between  text-white">
<div>
    <h1 class='text-[20px] font-bold'>This is Our Result</h1>
    <p class="text-gray-300">How capable we are at work shines through in every endevor.</p>
</div>
<div class="flex  w-[100%] ">
    <ul class="flex flex-row justify-evenly w-[100%]">
        <li>
            <div class="flex flex-wrap flex-col text-justify ">
            <h1 class="text-4xl">160</h1>
            <p class="text-gray-300 text-[10px] ">Client Project</p>
            </div>
        </li>
        <li>
            <div class="flex flex-wrap flex-col text-justify">
            <h1 class="text-4xl">340</h1>
            <p class="text-gray-300 text-[10px]">Sucesful Project</p>
            </div>
        </li>
        <li>
            <div class="flex flex-wrap flex-col text-justify">
            <h1 class="text-4xl">300+</h1>
            <p class="text-gray-300 text-[10px]">Team Members</p>
            </div>
        </li>
        <li>
            <div class="flex flex-wrap flex-col text-justify">
            <h1 class="text-4xl">82 M</h1>
            <p class="text-gray-300 text-[10px]">Total Revenue</p>
            </div>
        </li>
    </ul>
</div>
</section>
</section>
    );
}

export default Hero;
